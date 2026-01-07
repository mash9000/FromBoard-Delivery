import './delivery-calculator/delivery-calculator.scss';
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
            <img alt={articleData.getImageDescription()}
                 src='./images/image-of-delivery.webp'/>
            <form className='delivery-calculator__form'
                  autoComplete='off'
                  method='POST'>
                <h3 className='delivery-calculator__heading-of-form'>{formData.getHeading()}</h3>
                <p className='delivery-calculator__description-of-form'>{formData.getDescription()}</p>
                <StringInput placeholder={formData.placeholders[0]}/>
                <EmailInput placeholder={formData.placeholders[1]}/>
                <TelephoneInput placeholder={formData.placeholders[2]}/>
                <NumberInput placeholder={formData.placeholders[3]}/>
                <NumberInput placeholder={formData.placeholders[4]}/>
                <StringInput placeholder={formData.placeholders[5]}/>
                <StringInput placeholder={formData.placeholders[6]}/>
                <StringInput placeholder={formData.placeholders[7]}/>
                <StringInput placeholder={formData.placeholders[8]}/>
                <Button value={formData.buttonValue}/>
            </form>
        </div>
    );
}