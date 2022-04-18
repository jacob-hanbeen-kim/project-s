import styled from 'styled-components'
import { Button as StyledBtn } from "../../styles/Button.styled"

export const ButtonContainer = styled.div`
    /* max-width: 30%; */
    margin: 0px;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
`

export const Button = styled(StyledBtn)`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;

    height: 100%;
    width: 100%;
    white-space: nowrap;

    border: none;
    border-left: inherit;

    font-size: ${({ fontSize }) => fontSize ? fontSize : 'inherit'};
`