import './certificate/certificate.scss';
import './certificate/__img/certificate__img.scss';
import './certificate/__title/certificate__title.scss';

import type {
    QualityDocument
} from "./model/QualityDocument.ts";

export const Certificate = (certificate: QualityDocument) => {
    return (
        <figure className="certificate">
            <img
                src={certificate.imgSrc}
                alt={certificate.imgAlt}
                className='certificate__img'/>
            <figcaption
                className='certificate__title'>{certificate.title}</figcaption>
        </figure>
    );
}