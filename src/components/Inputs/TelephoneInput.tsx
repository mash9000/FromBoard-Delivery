import './input.scss';
import './input--focus.scss';
import './input__text-hint.scss';
import './input__box.scss';

type TelephoneInputProps = {
    placeholder: string,
    textHint?: string
}

export const TelephoneInput = ({placeholder, textHint}: TelephoneInputProps) => {
    return (
        <div className='input__box'>
            <input
                className='input input--focus'
                type='tel'
                placeholder={placeholder}
                spellCheck={true}
                required={true}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}