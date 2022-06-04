import styled from 'styled-components'
import { FaSlidersH } from 'react-icons/fa';

export const Aside = styled.aside`
    position: sticky;
    top: 0;
    padding: 30px;
    
    height: 100vh;
    min-width: 380px;
    
    overflow-y: scroll;

    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
`

export const FilterIcon = styled(FaSlidersH)`
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: flex-start;

    text-align: start;

    width: 100%;
    margin: 10px 0px;
`

export const InputContainer = styled.div`
    padding-left: 20px;
    width: 100%;
`