import './quality-guarantees/quality-guarantees.scss';
import './quality-guarantees/__inner-box/quality-guarantees__inner-box.scss';
import {Button} from "../Button/Button.tsx";
import type {QualityGuaranteesProps} from "./model/QualityGuaranteesProps.ts";
import type {QualityDocument} from "../Certificate/model/QualityDocument.ts";
import {Certificate} from "../Certificate/Certificate.tsx";

export const QualityGuarantees = (data: QualityGuaranteesProps) => {
    return (
        <div className="quality-guarantees">
            <div className="quality-guarantees__inner-box">
                <h3>{data.heading}</h3>
                <p>{data.description}</p>
                {data.certificates.map((certificate: QualityDocument) => (
                    <Certificate key={certificate.title} {...certificate} />))}
            </div>
            <Button value='Показать больше документов'/>
        </div>
    );
}