import type {
    QualityDocument
} from "./model/QualityDocument.ts";

export const Certificate = (certificate: QualityDocument) => {
    return (
        <figure key={certificate.title}>
            <img
                src={certificate.imgSrc}
                alt={certificate.imgAlt}/>
            <figcaption>{certificate.title}</figcaption>
        </figure>
    );
}