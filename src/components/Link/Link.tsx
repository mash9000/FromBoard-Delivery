import './styles/link.scss';
import './styles/link--hover.scss';
import './styles/link--active.scss';
import type {LinkModel} from "./model/LinkModel.ts";

export const Link = ({getHref, getTitle}: LinkModel) => {
    return (
        <a
            className='link link--hover link--active'
            href={getHref().href}>{getTitle()}</a>
    )
}