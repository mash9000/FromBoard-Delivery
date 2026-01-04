import type {CSSProperties} from "react";
import type {IIconStatus} from "./IIconStatus.ts";

export interface IIconControllerForInputs {
    getCSSProperties(iconProperties: IIconStatus): CSSProperties
}