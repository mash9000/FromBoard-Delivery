import type {IIconStatus} from "./IIconStatus.ts";
import type {CSSProperties} from "react";
import type {IIconControllerForInputs} from "./IIconControllerForInputs.ts";

export class IconControllerForInputs implements IIconControllerForInputs {
    public getCSSProperties(iconProperties: IIconStatus): CSSProperties {
        if (iconProperties.iconOnTheLeft && !iconProperties.iconOnTheRight)
            return this.getCSSPropertiesForTheIconLocatedOnTheLeft(iconProperties);

        if (!iconProperties.iconOnTheLeft && iconProperties.iconOnTheRight)
            return this.getCSSPropertiesForTheIconLocatedOnTheRight(iconProperties);

        if (iconProperties.iconOnTheLeft && iconProperties.iconOnTheRight)
            return this.getCSSPropertiesForTheIconLocatedOnTheOnBothSides(iconProperties);
        return {}
    }

    private readonly pathToTheFolderWithIconsForInputs: string = '/images/for-inputs/variant-1/';

    private getCSSPropertiesForTheIconLocatedOnTheLeft(iconProperties: IIconStatus): CSSProperties {
        return {
            '--icon-located--placeholder': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheLeft?.placeholder})`,
            '--icon-located--focus': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheLeft?.focus})`,
            '--icon-located--after-entering-the-text': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheLeft?.afterEnteringTheText})`,
            '--bg-position': '12px 12px',
            'padding': '12px 12px 12px 40px'
        } as CSSProperties;
    }

    private getCSSPropertiesForTheIconLocatedOnTheRight(iconProperties: IIconStatus): CSSProperties {
        return {
            '--icon-located--placeholder': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheRight?.placeholder})`,
            '--icon-located--focus': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheRight?.focus})`,
            '--icon-located--after-entering-the-text': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheRight?.afterEnteringTheText})`,
            '--bg-position': '222px 12px',
            'padding': '12px 40px 12px 12px'
        } as CSSProperties;
    }

    private getCSSPropertiesForTheIconLocatedOnTheOnBothSides(iconProperties: IIconStatus): CSSProperties {
        return {
            '--icon-located--placeholder': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheLeft?.placeholder}), url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheRight?.placeholder})`,
            '--icon-located--focus': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheLeft?.focus}), url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheRight?.focus})`,
            '--icon-located--after-entering-the-text': `url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheLeft?.afterEnteringTheText}), url(${this.pathToTheFolderWithIconsForInputs}${iconProperties.iconOnTheRight?.afterEnteringTheText})`,
            '--bg-position': '12px 12px, 222px 12px',
            'padding': '12px 40px 12px 40px'
        } as CSSProperties;
    }
}