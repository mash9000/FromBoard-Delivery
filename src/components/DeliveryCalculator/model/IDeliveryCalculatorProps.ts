import type {IArticleData} from "./IArticleData.ts";
import type {IFormData} from "./IFormData.ts";

export interface IDeliveryCalculatorProps {
    articleData: IArticleData;
    formData: IFormData;
}