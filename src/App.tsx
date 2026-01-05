import {Header} from "./components/Header/Header.tsx";
import type {LinkModel} from "./components/Link/model/LinkModel.ts";
import type {ButtonModel} from "./components/Button/model/ButtonModel.ts";

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

    return (
        <Header
            getLinks={() => links}
            getDataOfButton={() => btn}
            getPricingInformation={() => pricingInfo}
            getHotlineTelephoneNumber={() => hotline}/>
    );
}