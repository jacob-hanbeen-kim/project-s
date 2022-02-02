import styled from "styled-components"

export const Toggler = styled.button`
    display: flex;
    font-size: 2rem;
    padding: 10px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.onNavbar};
    opacity: 0.75;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;