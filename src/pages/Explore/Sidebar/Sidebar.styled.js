import styled from 'styled-components'

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

    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 20px;
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