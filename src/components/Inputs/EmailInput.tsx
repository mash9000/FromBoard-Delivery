import './input.scss';
import './input--focus.scss';
import './input__text-hint.scss';
import './input__box.scss';

type EmailInputProps = {
    placeholder: string,
    textHint?: string
}

export const EmailInput = ({placeholder, textHint}: EmailInputProps) => {
    return (
        <div className='input__box'>
            <input
                className='input input--focus'
                type='email'
                placeholder={placeholder}
                required={true}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}