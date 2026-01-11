import './advantage-block/advantage-block.scss';
import './advantage-block/_inner-block/advantage-block--inner-block.scss';
import './advantage-block/__heading/advantage-block__heading.scss';

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
import {QualityGuarantees} from "../QualityGuarantees/QualityGuarantees.tsx";
import type {
    QualityGuaranteesProps
} from "../QualityGuarantees/model/QualityGuaranteesProps.ts";
import type {ReviewProps} from "../Review/model/ReviewProps.ts";
import {CarouselOfReview} from "../Carousel/CarouselOfReview.tsx";
import {useWindowWidth} from "./model/TrackScreenWidth.ts";

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
        },
        {
            imgSrc: '/images/advantages/secure-packaging.svg',
            imgAlt: 'иконка надёжной упаковки',
            heading: 'Надёжная упаковка',
            description: 'Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и в отличном состоянии'
        },
        {
            imgSrc: '/images/advantages/quickly-and-profitably.svg',
            imgAlt: 'иконка скорости и выгоды',
            heading: 'Быстро и выгодно',
            description: 'Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее.'
        },
        {
            imgSrc: '/images/advantages/convenient-service.svg',
            imgAlt: 'иконка удобства сервиса',
            heading: 'Удобный сервис',
            description: 'Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и беззаботным'
        },
        {
            imgSrc: '/images/advantages/transparency-of-work.svg',
            imgAlt: 'иконка прозрачности работы',
            heading: 'Прозрачность работы',
            description: 'Мы предоставляем полный контроль над каждым этапом доставки, от момента заказа до момента прибытия заказа'
        },
        {
            imgSrc: '/images/advantages/cargo-insurance.svg',
            imgAlt: 'иконка старховки груза',
            heading: 'Страхование груза',
            description: 'Наше страхование обеспечивает полную защиту и покрытие почти все неприятные и неожиданные ситуации'
        },
    ];

    const qualityGuarantess: QualityGuaranteesProps = {
        heading: 'Гарантии качества',
        description: 'Наши гарантии качества включают в себя полный спектр документов, необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке. Мы предоставляем вам надёжность и уверенность',
        certificates: [
            {
                imgSrc: '/images/certificates/1.webp',
                imgAlt: 'световая копия свидетельства о регистрации в РФ',
                title: 'Свидетельство о регистрации в РФ'
            },
            {
                imgSrc: '/images/certificates/2.webp',
                imgAlt: 'световая копия свидетельства о регистрации в США',
                title: 'Свидетельство о регистрации в США'
            },
            {
                imgSrc: '/images/certificates/3.webp',
                imgAlt: 'световая копия свидетельства о регистрации в Китае',
                title: 'Свидетельство о регистрации в Китае'
            },
            {
                imgSrc: '/images/certificates/4.webp',
                imgAlt: 'световая копия свидетельства о регистрации в Великобритании',
                title: 'Свидетельство о регистрации в Великобритнии'
            },
        ]
    }

    const reviews: ReviewProps[] = [
        {
            getParagraph: () => 'Я уже несколько лет заказываю дизайнерскую одежду из Франции через ваш сервис, и он никогда меня не подводил. Важно иметь надежную компанию, которая позаботится о вашем заказе и предоставит все необходимые документы для ввоза в Россию',
            getAuthor: () => 'Ольга'
        },
        {
            getParagraph: () => 'Заказал шикарные часы из Швейцарии, и доставка была невероятно быстрой. Ваш сервис делает интернет-шоппинг более доступным и удобным',
            getAuthor: () => 'Игорь'
        },
        {
            getParagraph: () => 'Ваш сервис действительно изменил мой способ покупок. Я больше не переживаю о таможенных вопросах и документах - все у вас в порядке. Спасибо за ваше качество и надежность',
            getAuthor: () => 'Екатерина'
        },
        {
            getParagraph: () => 'Я заказал редкий антикварный предмет из Японии через ваш сервис, и остался впечатлен. Все пришло в отличном состоянии, и ваша гарантия качества действительно работает. Спасибо за ваше профессиональное обслуживание',
            getAuthor: () => 'Дмитрий'
        }
    ]

    const width = useWindowWidth();

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
                <h3 className='advantage-block__heading'>Наши преимущества</h3>
                <div className='advantage-block_inner-block'>
                    {advantages.map((advantage: IAdvantageProps) =>
                        <Advantage key={advantage.heading} {...advantage} />)}
                </div>
            </div>
            <QualityGuarantees {...qualityGuarantess} />
            {reviews.length > 0 && <CarouselOfReview reviews={reviews} limitOnDisplayingReviewCards={width <= 1024 ? 1 : 2}/>}
        </>
    );
}