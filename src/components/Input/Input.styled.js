import styled from 'styled-components'

export const Container = styled.div`
    /* font-family: Poppins, sans-serif; */
    line-height: 1.5;
    font-size: 15px;
    color: rgb(53, 56, 64);
    box-sizing: border-box;
    height: 45px;
`

export const InputContainer = styled.div`
    cursor: text;
    display: flex;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    width: 100%;
    padding: 12px;
    height: 45px;
    max-width: 768px;
`

export const StyledInput = styled.input`
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    margin: 0px;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: inherit;
    line-height: inherit;
    min-height: inherit;
    cursor: text;
`