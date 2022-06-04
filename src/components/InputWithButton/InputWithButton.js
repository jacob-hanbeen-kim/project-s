import {
    ButtonContainer,
    Button
} from './InputWithButton.styled'

import { Input } from ".."


const InputWithButton = ({ onChange, onClick, inputPlaceHolder, btnText, type, fontSize }) => {
    return (
        <Input onChange={(e) => onChange(e.target.value)} placeholder={inputPlaceHolder} type={type} fontSize={fontSize}>
            <ButtonContainer>
                <Button onClick={onClick} fontSize={fontSize}>{btnText}</Button>
            </ButtonContainer>
        </Input>
    )
}

export default InputWithButton