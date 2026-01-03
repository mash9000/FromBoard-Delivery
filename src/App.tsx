import {StringInput} from "./components/Inputs/StringInput.tsx";
import type {IInputIcons} from "./components/Inputs/model/IInputIcons.ts";

export const App = () => {
    const icon: IInputIcons = {
        leftIcon: {
            inputedName: 'vite.svg'
        }
    }
    return (
        <StringInput
            placeholder='Имя'
            textHint='хоть какая-то поммощь'
            icon={icon}/>
    );
}