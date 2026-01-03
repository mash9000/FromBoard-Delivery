import './input.scss';
import './input__box.scss';
import './input__text-hint.scss';
import './input--focus.scss';

type InputProps = {
    type: 'text' | 'tel' | 'email' | 'number',
    placeholder: string,
    spellcheck?: boolean,
    minValue?: number,
    step?: number,
    pattern?: string,
    textHint?: string
}

export const Input = ({
                          type,
                          placeholder,
                          spellcheck,
                          minValue,
                          step,
                          pattern,
                          textHint
                      }: InputProps) => {
    return (
        <div className='input__box'>
            <input
                className='input input--focus'
                type={type}
                autoComplete='off'
                placeholder={placeholder}
                spellCheck={spellcheck}
                min={minValue ? minValue : 1000}
                step={step ? step : ''}
                pattern={pattern ? pattern : '.*'}
                required={true}/>
            {textHint && <p className='input__text-hint'>{textHint}</p>}
        </div>
    );
}