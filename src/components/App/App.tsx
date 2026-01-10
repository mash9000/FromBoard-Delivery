import {Header} from "../Header/Header.tsx";
import type {LinkModel} from "../Link/model/LinkModel.ts";
import type {ButtonModel} from "../Button/model/ButtonModel.ts";
import {useState} from "react";
import {
    DeliveryCalculator
} from "../DeliveryCalculator/DeliveryCalculator.tsx";
import type {
    IDeliveryCalculatorProps
} from "../DeliveryCalculator/model/IDeliveryCalculatorProps.ts";
import {Advantage} from "../Advantage/Advantage.tsx";
import type {IAdvantageProps} from "../Advantage/model/IAdvantageProps.ts";

export const App = () => {
    const links: LinkModel[] = [
        {
            getHref: () => new URL('http://localhost'),
            getTitle: () => 'Калькулятор'
        },
        {
            getHref: () => new URL('http://localhost'),
            getTitle: () => 'О нас'
        },
        {
            getHref: () => new URL('http://localhost'),
            getTitle: () => 'Гарантии'
        },
        {
            getHref: () => new URL('http://localhost'),
            getTitle: () => 'Отзывы'
        },
    ];

    const btn: ButtonModel = {
        value: 'Оставить заявку'
    }

    const hotline = {
        telephoneNumber: '+7 (800) 123 45-67',
        description: 'Звонки по России бесплатны'
    }

    const pricingInfo = {
        slogan: 'Доставляем товары из заграницы в Россию',
        minimumOrderValue: 2
    }

    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    const toggleNavbar = (): void => {
        setIsNavbarOpen(prev => !prev);
    }

    const deliveryCalculator: IDeliveryCalculatorProps = {
        articleData: {
            getHeading: () => 'Без проблемная доставка купленных вещей из США, Европы и Азии в Россию',
            getDescription: () => 'Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России',
            getImageDescription: () => 'изображение оформления доставки'
        },
        formData: {
            getHeading: () => 'Калькулятор доставки',
            getDescription: () => 'Посчитайте, сколько будет стоить перевозка покупки из зарубежа',
            placeholders: ['Имя',
                'Почта',
                'Телефон',
                'Общая площадь, м²',
                'Вес, кг',
                'Страна покупки',
                'Город покупки',
                'Область доставки',
                'Город доставки'],
            buttonValue: 'Заказать расчёт'
        }
    }

    const advantages: IAdvantageProps[] = [
        {
            imgSrc: '/images/advantages/customs-clearance-of-cargo.svg',
            imgAlt: 'иконка растаможки груза',
            heading: 'Растаможка грузка',
            description: 'Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза'
        }
    ];

    return (
        <>
            <Header
                getLinks={() => links}
                getDataOfButton={() => btn}
                getPricingInformation={() => pricingInfo}
                getHotlineTelephoneNumber={() => hotline}
                isNavbarOpen={isNavbarOpen}
                toggleNavbar={toggleNavbar}/>
            <DeliveryCalculator {...deliveryCalculator} />
            <div className='advantage-block'>
                {advantages.map((advantage: IAdvantageProps) =>
                    <Advantage {...advantage} />)}
            </div>
        </>
    );
}