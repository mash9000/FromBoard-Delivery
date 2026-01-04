import type {PositionVariant} from "./PositionVariant.ts";
import type {ITypesOfIcons} from "./ITypesOfIcons.ts";

export interface IIconStatus {
    position: PositionVariant,
    iconOnTheLeft?: ITypesOfIcons,
    iconOnTheRight?: ITypesOfIcons
}