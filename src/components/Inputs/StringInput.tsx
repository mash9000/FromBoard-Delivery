import './styles/input.scss';
import './styles/input--focus.scss';
import './styles/input__text-hint.scss';
import './styles/input__box.scss';

import type {PropsOfInputs} from "./model/interfaces/PropsOfInputs.ts";
import {IconControllerForInputs} from "./model/IconControllerForInputs.ts";
import type {CSSProperties} from "react";

export const StringInput = ({placeholder, textHint, icon}: PropsOfInputs) => {
    const cssPropertiesObject = new IconControllerForInputs();
    let cssProperties: CSSProperties = {} as CSSProperties;
    if (icon)
        cssProperties = cssPropertiesObject.getCSSProperties(icon);

    return (
        <div className='input__box'>
            <input
                className='input input--focus'
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