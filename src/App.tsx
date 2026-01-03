import {Button} from "./components/Button/Button.tsx";
import {FullNameInput} from "./components/Inputs/FullNameInput.tsx";

export const App = () => {
    return (
        <>
            <Button
                value='привет'
                nameOfIcon={false}/>
            <FullNameInput
                placeholder='Имя'
                textHint='хоть какая-то поммощь'/>
        </>
    );
}