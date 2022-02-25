import {
    ButtonContainer,
    Button
} from './InputWithButton.styled'

import { Input } from ".."


const InputWithButton = ({ onChange, onClick, inputPlaceHolder, btnText, type }) => {
    return (
        <Input onChange={(e) => onChange(e.target.value)} placeholder={inputPlaceHolder} type={type}>
            <ButtonContainer>
                <Button onClick={onClick} >{btnText}</Button>
            </ButtonContainer>
        </Input>
    )
}

export default InputWithButton