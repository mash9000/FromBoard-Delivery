import './input.scss';

type InputProps = {
    type: 'text' | 'tel' | 'email' | 'number',
    placeholder: string,
    spellcheck?: boolean,
    minValue?: number,
    step?: number,
    pattern?: string
}

export const Input = ({
                          type,
                          placeholder,
                          spellcheck,
                          minValue,
                          step,
                          pattern
                      }: InputProps) => {
    return (
        <input
            className='input'
            type={type}
            autoComplete='off'
            placeholder={placeholder}
            spellCheck={spellcheck}
            min={minValue ? minValue : 1000}
            step={step ? step : ''}
            pattern={pattern ? pattern : '.*'}
            required={true}/>
    );
}