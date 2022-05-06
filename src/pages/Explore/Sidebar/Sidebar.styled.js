import styled from 'styled-components'
import { FaSlidersH } from 'react-icons/fa';

export const Aside = styled.aside`
    position: sticky;
    top: 0;
    padding: 30px;
    /* background-color: ${({ theme }) => theme.colors.sidebar}; */
    background-color: ${({ theme }) => theme.colors.background};
    overflow-y: scroll;
    height: 100vh;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;

    /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
    /* margin-bottom: 20px; */
`

export const FilterIcon = styled(FaSlidersH)`
    
`

export const Container = styled.div`
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
    margin-left: 20px;
`