import './styles/burger-button.scss';
import './styles/burger-button--cross.scss';
import './styles/burger-button__hl.scss';

type BurgerButtonProps = {
    toggleNavbar: () => void,
    isNavbarOpen: boolean
}

export const BurgerButton = ({
                                 toggleNavbar,
                                 isNavbarOpen
                             }: BurgerButtonProps) => {
    return (
        <div
            className={`burger-button ${isNavbarOpen ? 'burger-button--cross' : ''}`}
            onClick={toggleNavbar}>
            <div className='burger-button__hl'/>
            <div className='burger-button__hl'/>
            <div className='burger-button__hl'/>
        </div>
    );
}