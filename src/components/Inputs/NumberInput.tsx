import './input.scss';
import './input--focus.scss';
import './input__text-hint.scss';
import './input__box.scss';
import type {PropsOfInputs} from "./PropsOfInputs.ts";

export const NumberInput = ({placeholder, textHint}: PropsOfInputs) => {
    return (
        <div className='input__box'>
            <input
                className='input input--focus'
                type='number'
                placeholder={placeholder}
                required={true}
                min={0}
                step={.1}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}