import './button-prev-next/button-prev-next.scss';
import './button-prev-next/button-prev-next--prev.scss';
import './button-prev-next/button-prev-next--next.scss';

import type {ButtonPrevNextProps} from "./model/ButtonPrevNextProps.ts";

export const ButtonPrevNext = (data: ButtonPrevNextProps) => {
    return (
        <button type='button'
                className={`button-prev-next ${data.type === 'prev' ? 'button-prev-next--prev' : 'button-prev-next--next'}`}
                onClick={data.changeSlide}></button>
    );
}