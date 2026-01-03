import {Button} from "./components/Button/Button.tsx";
import {Input} from "./components/Input/Input.tsx";

export const App = () => {
    return (
        <>
            <Button
                value='привет'
                nameOfIcon={false}/>
            <Input
                type='number'
                placeholder='Вес, кг'
                minValue={10}
                step={1}
                pattern='[0-9]+'
                textHint='бамболейо'/>
        </>
    );
}