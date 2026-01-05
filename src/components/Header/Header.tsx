import './styles/header.scss';
import type {HeaderModel} from "./model/HeaderModel.ts";
import type {LinkModel} from "../Link/model/LinkModel.ts";
import {Link} from "../Link/Link.tsx";
import {Button} from "../Button/Button.tsx";
import {Logo} from "../Logo/Logo.tsx";
import {useEffect, useState} from "react";
import {fetchExchangeRate} from "./model/CurrencyAPI.ts";
import {CurrencyCodesAndSymbols} from "./model/CurrencyCodesAndSymbols.ts";

export const Header = ({
                           getLinks,
                           getDataOfButton,
                           getPricingInformation,
                           getHotlineTelephoneNumber
                       }: HeaderModel) => {

    const [usDollarExchangeRate, setUSDollarExchangeRate] = useState<number>(0);
    const [euroExchangeRate, setEuroExchangeRate] = useState<number>(0);
    const [yuanExchangeRate, setYuanExchangeRate] = useState<number>(0);
    const [currencyExchangeRateQueryError, setCurrencyExchangeRateQueryError] = useState<string>('');

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const [usd, eur, cny] = await Promise.all([
                    fetchExchangeRate('USD'),
                    fetchExchangeRate('EUR'),
                    fetchExchangeRate('CNY')
                ]);

                setUSDollarExchangeRate(usd);
                setEuroExchangeRate(eur);
                setYuanExchangeRate(cny);
            } catch (error) {
                setCurrencyExchangeRateQueryError(`Не удалось загрузить курс валюты ${error}`);
            }
        };

        void fetchRates();
    }, []);

    return (
        <header className='header'>
            <div className='header__quick-info-box'>
                <Logo/>
                <div className='header__box-of-current-information'>
                    <div className='header__exchange-rates-of-major-currencies'>
                        <p className='header__slogan'>{getPricingInformation().slogan}</p>
                        <p className='header__minimum-order-value'>{`Стоимость от ${getPricingInformation().minimumOrderValue} ${CurrencyCodesAndSymbols.getTheEndingsOfWordsInRoubles(getPricingInformation().minimumOrderValue)} за заказ`}</p>
                        <div className='header__exchange-rates-box'>
                            {currencyExchangeRateQueryError !== '' && currencyExchangeRateQueryError}
                            <p className='header__current-exchange-rate'>{`1 ${CurrencyCodesAndSymbols.getTheCurrencySymbolByCode('USD')} = ${Math.round(usDollarExchangeRate)} ₽`}</p>
                            <p className='header__current-exchange-rate'>{`1 ${CurrencyCodesAndSymbols.getTheCurrencySymbolByCode('EUR')} = ${Math.round(euroExchangeRate)} ₽`}</p>
                            <p className='header__current-exchange-rate'>{`1 ${CurrencyCodesAndSymbols.getTheCurrencySymbolByCode('CNY')} = ${Math.round(yuanExchangeRate)} ₽`}</p>
                        </div>
                    </div>
                    <div className='header__hotline-telephone-number'>
                        <a href={`tel:${getHotlineTelephoneNumber().telephoneNumber}`}>{getHotlineTelephoneNumber().telephoneNumber}</a>
                        <h3>{getHotlineTelephoneNumber().description}</h3>
                    </div>
                </div>
            </div>
            <nav className='header__navbar'>
                {getLinks().map((link: LinkModel) =>
                    <Link
                        key={link.getTitle()}
                        {...link} />)}
                <Button value={getDataOfButton().value}
                        nameOfIcon={getDataOfButton().nameOfIcon}/>
            </nav>
        </header>
    )
}