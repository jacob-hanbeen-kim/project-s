import styled from 'styled-components'

const getBorder = (props) => {
    if (props.noBorder) {
        return ''
    } else {
        return `
            border-top: 1px solid ${props.theme.colors.border};
            border-bottom: 1px solid ${props.theme.colors.border};
        `
    }
}

export const TabContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;

    z-index: 9;
    ${(props) => getBorder(props)}

    /* width: 100vw; */
    width: 100%;
    padding: 0px 5vw;

    position: ${props => props.sticky ? 'sticky' : 'relative'};
    ${props => props.sticky && `
        top: 3.4rem;   
    `}
    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.navbar};
`

export const TabItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({align}) => align ? align : 'center'};
    align-items: center;
    
    width: 100%;
    /* max-width: 1100px; */

    /* padding: 0px 10px; */
    /* margin: 0px 30px; */

    // make scrollable
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        justify-content: flex-start;
    }
`

export const Tab = styled.a`
    color: ${({ theme }) => theme.colors.onSurface};
    opacity: ${({ isActive }) => isActive ? '1.0' : '0.75'};
    border-bottom: ${({ isActive, theme }) =>
        isActive ? `3px solid ${theme.colors.primary}` : 'none'
    };

    margin: 0px 1.8rem;
    padding: 15px 5px 10px 5px;
    text-decoration: none;

    &:hover {
        color: ${({ isActive, theme }) => !isActive && theme.colors.primary};
    }
`

export const TabPanel = styled.div`
    /* min-height: 400px; */
    /* width: 100vw; */
    /* height: 100vh; */

    /* border: 0px; */
    /* margin: 0px; */
    /* padding: 0px; */
`