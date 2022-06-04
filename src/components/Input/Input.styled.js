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
    height: 40px;
    /* max-width: 768px; */

    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
`

export const StyledInput = styled.input`
    box-sizing: border-box;
    
    margin: 0px;
    padding: 12px;
    
    border: none;
    outline: none;
    
    width: 100%;
    
    font: inherit;
    font-size: ${({ fontSize }) => fontSize ? fontSize : 'inherit'};
    line-height: inherit;
    min-height: inherit;
    
    color: inherit;
    background-color: transparent;
    cursor: text;

    &::placeholder {
        color: #A4A4A4;
    }

    /* &:invalid {
        ${({ focused }) => focused && 'border: 1px solid red;'}
    }

    &:invalid ~ span {
        ${({ focused }) => focused && 'display: block;'}
    } */
`