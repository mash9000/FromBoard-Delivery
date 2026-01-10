import './advantage/advantage.scss';
import type {IAdvantageProps} from "./model/IAdvantageProps.ts";

export const Advantage = (props: IAdvantageProps) => {
    return (
        <figure className="advantage">
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
        </figure>
    );
}