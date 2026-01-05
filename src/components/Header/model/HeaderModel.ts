import type {LinkModel} from "../../Link/model/LinkModel.ts";
import type {ButtonModel} from "../../Button/model/ButtonModel.ts";

export type HeaderModel = {
    getLinks(): LinkModel[],
    getDataOfButton(): ButtonModel,
    getPricingInformation(): {slogan: string, minimumOrderValue: number },
    getHotlineTelephoneNumber(): {telephoneNumber: string, description: string},
}