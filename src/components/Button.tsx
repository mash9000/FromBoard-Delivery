import './button.scss';
import './button--hover.scss';
import './button--active.scss';
import './properties-when-the-icon-is-present/button--with-icon.scss';

type ButtonProps = {
    value: string,
    nameOfIcon: string | false
}

export const Button = ({value, nameOfIcon}: ButtonProps) => {
    const pathToTheFolderWithIconsForButtons: string = '/images/buttons/';
    return (
        <button type='button'
                className={`button button--hover button--active ${nameOfIcon ? 'button--with-icon' : ''}`}
                style={nameOfIcon ? {['--icon-url' as any]: `url(${pathToTheFolderWithIconsForButtons}${nameOfIcon})`} : undefined}>{value}</button>
    );
}