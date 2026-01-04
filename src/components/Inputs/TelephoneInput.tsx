import './styles/input.scss';
import './styles/input--focus.scss';
import './styles/input__text-hint.scss';
import './styles/input__box.scss';
import type {PropsOfInputs} from "./model/interfaces/PropsOfInputs.ts";

export const TelephoneInput = ({placeholder, textHint}: PropsOfInputs) => {
    return (
        <div className='input__box'>
            <input
                className='input input--focus'
                type='tel'
                placeholder={placeholder}
                required={true}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}