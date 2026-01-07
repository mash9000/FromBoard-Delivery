import './link/link.scss';
import './link/_hover/link--hover.scss';
import './link/_active/link--active.scss';
import type {LinkModel} from "./model/LinkModel.ts";

export const Link = ({getHref, getTitle}: LinkModel) => {
    return (
        <a
            className='link link--hover link--active'
            href={getHref().href}>{getTitle()}</a>
    )
}