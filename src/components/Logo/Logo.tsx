import './logo/logo.scss';
import './logo/__img/logo__img.scss';
import './logo/__text/logo__text.scss';

export const Logo = () => {
    return (
        <div className="logo">
            <div className="logo__img"></div>
            <p className='logo__text'>FromBoard Delivery</p>
        </div>
    );
}