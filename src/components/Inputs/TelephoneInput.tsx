import './input/input.scss';
import './input/_focus/input--focus.scss';
import './input/__text-hint/input__text-hint.scss';
import './input/__box/input__box.scss';
import type {PropsOfInputs} from "./model/interfaces/PropsOfInputs.ts";
import {IconControllerForInputs} from "./model/IconControllerForInputs.ts";
import type {CSSProperties} from "react";

export const TelephoneInput = ({placeholder, textHint, icon}: PropsOfInputs) => {
    const cssPropertiesObject = new IconControllerForInputs();
    let cssProperties: CSSProperties = {'padding': '12px'} as CSSProperties;
    if (icon)
        cssProperties = cssPropertiesObject.getCSSProperties(icon);

    return (
        <div className='input__box'>
            <input
                className='input input--focus'
                style={cssProperties}
                type='tel'
                placeholder={placeholder}
                required={true}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}