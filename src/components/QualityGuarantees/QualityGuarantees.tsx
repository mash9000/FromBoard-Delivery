import './quality-guarantees/quality-guarantees.scss';
import './quality-guarantees/__inner-box/quality-guarantees__inner-box.scss';
import './quality-guarantees/__heading/quality-guarantees__heading.scss';
import './quality-guarantees/__desc/quality-guarantees__desc.scss';

import {Button} from "../Button/Button.tsx";
import type {QualityGuaranteesProps} from "./model/QualityGuaranteesProps.ts";
import type {QualityDocument} from "../Certificate/model/QualityDocument.ts";
import {Certificate} from "../Certificate/Certificate.tsx";

export const QualityGuarantees = (data: QualityGuaranteesProps) => {
    return (
        <div className="quality-guarantees">
            <h3 className='quality-guarantees__heading'>{data.heading}</h3>
            <p className='quality-guarantees__desc'>{data.description}</p>
            <div className="quality-guarantees__inner-box">
                {data.certificates.map((certificate: QualityDocument) => (
                    <Certificate key={certificate.title} {...certificate} />))}
            </div>
            <Button value='Показать больше документов'/>
        </div>
    );
}