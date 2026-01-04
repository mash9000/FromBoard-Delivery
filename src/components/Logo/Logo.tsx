import './styles/logo.scss';
import './styles/logo__img.scss';
import './styles/logo__text.scss';

export const Logo = () => {
    return (
        <div className="logo">
            <div className="logo__img"></div>
            <p className='logo__text'>FromBoard Delivery</p>
        </div>
    );
}