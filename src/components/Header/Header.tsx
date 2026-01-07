import './styles/header.scss';
import './styles/header__navbar.scss';
import './styles/header__navbar--open-navbar.scss';
import './styles/header__hotline-telephone-number.scss';
import './styles/header__exchange-rates-box.scss';
import './styles/header__exchange-rates-box--open-navbar.scss';
import './styles/header__current-exchange-rate.scss';
import './styles/header__slogan.scss';
import './styles/header__slogan--open-navbar.scss';
import './styles/header__minimum-order-value.scss';
import './styles/header__minimum-order-value--open-navbar.scss';
import './styles/header--open-navbar.scss';

import type {HeaderModel} from "./model/HeaderModel.ts";
import type {LinkModel} from "../Link/model/LinkModel.ts";
import {Link} from "../Link/Link.tsx";
import {Button} from "../Button/Button.tsx";
import {Logo} from "../Logo/Logo.tsx";
import {useEffect, useState} from "react";
import {fetchExchangeRate} from "./model/CurrencyAPI.ts";
import {CurrencyCodesAndSymbols} from "./model/CurrencyCodesAndSymbols.ts";
import {BurgerButton} from "../BurgerButton/BurgerButton.tsx";

export const Header = ({
                           getLinks,
                           getDataOfButton,
                           getPricingInformation,
                           getHotlineTelephoneNumber,
                           isNavbarOpen,
                           toggleNavbar,
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
        <header
            className={`header ${isNavbarOpen ? 'header--open-navbar' : ''}`}>
            <Logo/>
            <p className={`header__slogan ${isNavbarOpen ? 'header__slogan--open-navbar' : ''}`}>{getPricingInformation().slogan}</p>
            <p className={`header__minimum-order-value ${isNavbarOpen ? 'header__minimum-order-value--open-navbar' : ''}`}>{`Стоимость от ${getPricingInformation().minimumOrderValue} ${CurrencyCodesAndSymbols.getTheEndingsOfWordsInRoubles(getPricingInformation().minimumOrderValue)} за заказ`}</p>
            <div className={`header__exchange-rates-box ${isNavbarOpen ? 'header__exchange-rates-box--open-navbar' : ''}`}>
                {currencyExchangeRateQueryError !== '' && currencyExchangeRateQueryError}
                <p className='header__current-exchange-rate'>{`1 ${CurrencyCodesAndSymbols.getTheCurrencySymbolByCode('USD')} = ${Math.round(usDollarExchangeRate)} ₽`}</p>
                <p className='header__current-exchange-rate'>{`1 ${CurrencyCodesAndSymbols.getTheCurrencySymbolByCode('EUR')} = ${Math.round(euroExchangeRate)} ₽`}</p>
                <p className='header__current-exchange-rate'>{`1 ${CurrencyCodesAndSymbols.getTheCurrencySymbolByCode('CNY')} = ${Math.round(yuanExchangeRate)} ₽`}</p>
            </div>
            <div className='header__hotline-telephone-number'>
                <a href={`tel:${getHotlineTelephoneNumber().telephoneNumber}`}>{getHotlineTelephoneNumber().telephoneNumber}</a>
                <h3>{getHotlineTelephoneNumber().description}</h3>
            </div>
            <BurgerButton toggleNavbar={toggleNavbar}
                          isNavbarOpen={isNavbarOpen}/>
            <nav
                className={`header__navbar ${isNavbarOpen ? 'header__navbar--open-navbar' : ''}`}>
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