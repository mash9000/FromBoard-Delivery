import './button/button.scss';
import './button/_hover/button--hover.scss';
import './button/_active/button--active.scss';
import './button/_disabled/button--disabled.scss';
import './button/_with-icon/button--with-icon.scss';
import type {ButtonModel} from "./model/ButtonModel.ts";

export const Button = ({value, nameOfIcon}: ButtonModel) => {
    const pathToTheFolderWithIconsForButtons: string = '/images/buttons/';
    return (
        <button type='button'
                className={`button button--hover button--active button--disable ${nameOfIcon ? 'button--with-icon' : ''}`}
                style={nameOfIcon ? {['--icon-url' as any]: `url(${pathToTheFolderWithIconsForButtons}${nameOfIcon})`} : undefined}>{value}</button>
    );
}