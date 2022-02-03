import styled from 'styled-components'

export const TabContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;

    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    z-index: 9;

    width: 100vw;

    position: sticky;
    top: 4.5rem;
    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.navbar};
`

export const TabItems = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
    justify-content: center;
    align-content: center;
    align-items: center;
    
    width: 100%;
    max-width: 1100px;

    padding: 0px 10px;
    margin: 0px 30px;

    // make scrollable
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`

export const Tab = styled.a`
    color: ${({ theme }) => theme.colors.onSurface};
    opacity: ${({ isActive }) => isActive ? '1.0' : '0.75'};
    border-bottom: ${({ isActive, theme }) =>
        isActive ? `3px solid ${theme.colors.onSurface}` : 'none'
    };

    margin: 0px 1.8rem;
    padding: 25px 5px 22px 5px;
    text-decoration: none;

    &:hover {
        color: ${({ isActive, theme }) => !isActive && theme.colors.primary};
    }
`

export const TabPanel = styled.div`
    min-height: 400px;

    border: 0;
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 1500px;
    font-size: 100%;
    vertical-align: baseline;
`