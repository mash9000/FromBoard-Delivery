import './input.scss';
import './input--focus.scss';
import './input__text-hint.scss';
import './input__box.scss';
import type {PropsOfInputs} from "./PropsOfInputs.ts";

export const StringInput = ({placeholder, textHint}: PropsOfInputs) => {
    return (
        <div className='input__box'>
            <input
                className='input input--focus'
                type='text'
                placeholder={placeholder}
                spellCheck={true}
                required={true}
                pattern={'^[a-z]{2,}$'}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}