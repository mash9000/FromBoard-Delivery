import './input/input.scss';
import './input/_focus/input--focus.scss';
import './input/__text-hint/input__text-hint.scss';
import './input/__box/input__box.scss';

import type {PropsOfInputs} from "./model/interfaces/PropsOfInputs.ts";
import {IconControllerForInputs} from "./model/IconControllerForInputs.ts";
import type {CSSProperties} from "react";

export const StringInput = ({placeholder, textHint, icon, styles}: PropsOfInputs) => {
    const cssPropertiesObject = new IconControllerForInputs();
    let cssProperties: CSSProperties = {'padding': '12px'} as CSSProperties;
    if (icon)
        cssProperties = cssPropertiesObject.getCSSProperties(icon);

    return (
        <div className='input__box'>
            <input
                className={`input input--focus ${styles}`}
                style={cssProperties}
                type='text'
                placeholder={placeholder}
                spellCheck={true}
                required={true}
                pattern={'^[a-z]{2,}$'}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}