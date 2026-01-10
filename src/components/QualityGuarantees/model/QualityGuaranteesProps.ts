import type {QualityDocument} from "../../Certificate/model/QualityDocument.ts";

export interface QualityGuaranteesProps {
    heading: string;
    description: string;
    certificates: QualityDocument[]
}