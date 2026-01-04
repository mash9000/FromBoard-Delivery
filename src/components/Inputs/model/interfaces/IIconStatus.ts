import type {ITypesOfIcons} from "./ITypesOfIcons.ts";
import type {PositionVariant} from "./PositionVariant.ts";

export interface IIconStatus {
    position: PositionVariant,
    iconOnTheLeft?: ITypesOfIcons,
    iconOnTheRight?: ITypesOfIcons
}