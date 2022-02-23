import {
    ButtonContainer,
    Button
} from './InputWithButton.styled'

import { Input } from ".."


const InputWithButton = ({ inputPlaceHolder, btnText }) => {
    return (
        <Input placeholder={inputPlaceHolder}>
            <ButtonContainer>
                <Button>{btnText}</Button>
            </ButtonContainer>
        </Input>
    )
}

export default InputWithButton