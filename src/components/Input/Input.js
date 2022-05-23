import {
    Container,
    InputContainer,
    StyledInput
} from './Input.styled';
import PropTypes from 'prop-types'

// https://www.w3schools.com/tags/tag_input.asp
const Input = (props) => {
    const { children, reverse, ...inputProps } = props;
    return (
        <Container>
            <InputContainer reverse={reverse}>
                <StyledInput
                    {...inputProps}
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
