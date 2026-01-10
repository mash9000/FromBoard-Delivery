import './advantage/advantage.scss';
import './advantage/__image/advantage__image.scss';
import './advantage/__desc/advantage__desc.scss';
import './advantage/__heading/advantage__heading.scss';

import type {IAdvantageProps} from "./model/IAdvantageProps.ts";

export const Advantage = (props: IAdvantageProps) => {
    return (
        <figure className="advantage">
            <img
                className='advantage__image'
                src={props.imgSrc}
                alt={props.imgAlt}/>
            <h3 className='advantage__heading'>{props.heading}</h3>
            <p className='advantage__desc'>{props.description}</p>
        </figure>
    );
}