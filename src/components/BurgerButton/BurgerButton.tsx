import './styles/burger-button.scss';
import './styles/burger-button__hl.scss';

type BurgerButtonProps = {
    toggleNavbar: () => void;
}

export const BurgerButton = ({toggleNavbar}: BurgerButtonProps) => {
    return (
        <div className='burger-button' onClick={toggleNavbar}>
            <div className='burger-button__hl'/>
            <div className='burger-button__hl'/>
            <div className='burger-button__hl'/>
        </div>
    );
}