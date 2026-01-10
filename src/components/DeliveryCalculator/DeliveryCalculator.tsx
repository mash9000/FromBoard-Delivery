import './delivery-calculator/delivery-calculator.scss';
import './delivery-calculator/__image/delivery-calculator__image.scss';
import './delivery-calculator/__form/delivery-calculator__form.scss';
import './delivery-calculator/__heading-of-form/delivery-calculator__heading-of-form.scss';
import './delivery-calculator/__description-of-form/delivery-calculator__description-of-form.scss';
import './delivery-calculator/__input-field/_fullname/delivery-calculator__input-field--full-name.scss';
import './delivery-calculator/__input-field/_email/delivery-calculator__input-field--email.scss';
import './delivery-calculator/__input-field/_telephone-number/delivery-calculator__input-field--telephone-number.scss';
import './delivery-calculator/__input-field/_total-area/delivery-calculator__input-field--total-area.scss';
import './delivery-calculator/__input-field/_weight/delivery-calculator__input-field--weight.scss';
import './delivery-calculator/__input-field/_country-of-purchase/delivery-calculator__input-field--country-of-purchase.scss';
import './delivery-calculator/__input-field/_city-of-purchase/delivery-calculator__input-field--city-of-purchase.scss';
import './delivery-calculator/__input-field/_delivery-area/delivery-calculator__input-field--delivery-area.scss';
import './delivery-calculator/__input-field/_delivery-city/delivery-calculator__input-field--delivery-city.scss';
import './delivery-calculator/__send-button/delivery-calculator__send-button.scss';

import {StringInput} from "../Inputs/StringInput.tsx";
import {EmailInput} from "../Inputs/EmailInput.tsx";
import {TelephoneInput} from "../Inputs/TelephoneInput.tsx";
import {NumberInput} from "../Inputs/NumberInput.tsx";
import {Button} from "../Button/Button.tsx";
import type {
    IDeliveryCalculatorProps
} from "./model/IDeliveryCalculatorProps.ts";

export const DeliveryCalculator = ({
                                       articleData,
                                       formData
                                   }: IDeliveryCalculatorProps) => {
    return (
        <div className='delivery-calculator'>
            <article className="delivery-calculator__article">
                <h2 className="delivery-calculator__heading-of-artice">{articleData.getHeading()}</h2>
                <p className='delivery-calculator__description-of-artice'>{articleData.getDescription()}</p>
            </article>
            <img className='delivery-calculator__image'
                 alt={articleData.getImageDescription()}
                 src='./images/image-of-delivery.webp'/>
            <form id='delivery-calculator'
                  className='delivery-calculator__form'
                  autoComplete='off'
                  method='POST'>
                <h3 className='delivery-calculator__heading-of-form'>{formData.getHeading()}</h3>
                <p className='delivery-calculator__description-of-form'>{formData.getDescription()}</p>
                <StringInput
                    styles='delivery-calculator__input-field--full-name'
                    placeholder={formData.placeholders[0]}/>
                <EmailInput
                    styles='delivery-calculator__input-field--email'
                    placeholder={formData.placeholders[1]}/>
                <TelephoneInput
                    styles='delivery-calculator__input-field--telephone-number'
                    placeholder={formData.placeholders[2]}/>
                <NumberInput
                    styles='delivery-calculator__input-field--total-area'
                    placeholder={formData.placeholders[3]}/>
                <NumberInput
                    styles='delivery-calculator__input-field--weight'
                    placeholder={formData.placeholders[4]}/>
                <StringInput
                    styles='delivery-calculator__input-field--country-of-purchase'
                    placeholder={formData.placeholders[5]}/>
                <StringInput
                    styles='delivery-calculator__input-field--city-of-purchase'
                    placeholder={formData.placeholders[6]}/>
                <StringInput
                    styles='delivery-calculator__input-field--delivery-area'
                    placeholder={formData.placeholders[7]}/>
                <StringInput
                    styles='delivery-calculator__input-field--delivery-city'
                    placeholder={formData.placeholders[8]}/>
                <Button
                    styles='delivery-calculator__send-button'
                    value={formData.buttonValue}/>
            </form>
        </div>
    );
}