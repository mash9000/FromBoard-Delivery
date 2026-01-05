import './styles/button.scss';
import './styles/button--hover.scss';
import './styles/button--active.scss';
import './styles/button--disabled.scss';
import './styles/button--with-icon.scss';
import type {ButtonModel} from "./model/ButtonModel.ts";

export const Button = ({value, nameOfIcon}: ButtonModel) => {
    const pathToTheFolderWithIconsForButtons: string = '/images/buttons/';
    return (
        <button type='button'
                className={`button button--hover button--active button--disable ${nameOfIcon ? 'button--with-icon' : ''}`}
                style={nameOfIcon ? {['--icon-url' as any]: `url(${pathToTheFolderWithIconsForButtons}${nameOfIcon})`} : undefined}>{value}</button>
    );
}