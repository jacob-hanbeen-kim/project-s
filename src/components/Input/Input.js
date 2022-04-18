import {
    Container,
    InputContainer,
    StyledInput
} from './Input.styled';
import PropTypes from 'prop-types'

// https://www.w3schools.com/tags/tag_input.asp
const Input = ({ onChange, type, name, placeholder, pattern, children, reverse, fontSize }) => {
    return (
        <Container>
            <InputContainer reverse={reverse}>
                <StyledInput
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    pattern={pattern}
                    onChange={onChange}
                    fontSize={fontSize}
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
