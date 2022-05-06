import styled from 'styled-components'

export const Container = styled.div`
    /* font-family: Poppins, sans-serif; */
    line-height: 1.5;
    font-size: ${({ theme }) => theme.fontSizes.use('standard')};
    box-sizing: border-box;
    width: inherit;
`

export const InputContainer = styled.div`
    cursor: text;
    display: flex;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    height: 45px;
    /* max-width: 768px; */

    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
`

export const StyledInput = styled.input`
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    margin: 0px;
    background-color: transparent;
    padding: 12px;
    border: none;
    outline: none;
    width: 100%;
    font-size: ${({ fontSize }) => fontSize ? fontSize : 'inherit'};
    line-height: inherit;
    min-height: inherit;
    cursor: text;
`