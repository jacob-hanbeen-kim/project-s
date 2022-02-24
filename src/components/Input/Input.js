import {
    Container,
    InputContainer,
    StyledInput
} from './Input.styled';
import PropTypes from 'prop-types'

// https://www.w3schools.com/tags/tag_input.asp
const Input = ({ type, name, placeholder, pattern, children, reverse }) => {
    return (
        <Container>
            <InputContainer reverse={reverse}>
                <StyledInput
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    pattern={pattern}
                />
                {children}
            </InputContainer>
        </Container>
    )
}

Input.defaultProps = {
    type: 'text',
    reverse: false
}

export default Input
