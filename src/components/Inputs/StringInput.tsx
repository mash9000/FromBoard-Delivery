import './styles/input.scss';
import './styles/input--with-icon.scss';
import './styles/input--with-icon--left.scss';
import './styles/input--with-icon--right.scss';
import './styles/input--with-icon--on-both-sides.scss';
import './styles/input--focus.scss';
import './styles/input__text-hint.scss';
import './styles/input__box.scss';
import type {PropsOfInputs} from "./model/PropsOfInputs.ts";

export const StringInput = ({placeholder, textHint, icon}: PropsOfInputs) => {
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