import {StringInput} from "./components/Inputs/StringInput.tsx";
import type {
    IIconStatus
} from "./components/Inputs/model/interfaces/IIconStatus.ts";
import {
    PositionVariant
} from "./components/Inputs/model/interfaces/PositionVariant.ts";

export const App = () => {
    const iconLeft: IIconStatus = {
        position: PositionVariant.LEFT,
        iconOnTheLeft: {
            placeholder: 'vite-placeholder.svg',
            focus: 'vite-focus.svg',
            afterEnteringTheText: 'vite.svg'
        }
    }

    return (
        <StringInput
            placeholder='Имя'
            textHint='хоть какая-то поммощь'
            icon={iconLeft}/>
    );
}