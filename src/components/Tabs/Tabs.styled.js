import styled from 'styled-components'

export const TabContainer = styled.div`
    padding: 2rem;
`

export const TabList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    border-bottom: 2px solid blue;
`

export const TabItem = styled.li`
    margin: 0 1em;

    &:active {
        color: blue;
        font-weight: bold;
        border: 2px solid blue;
        border-bottom: 0;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        position: relative;
        top: 2px;
    }
`

export const TabPanel = styled.div`

`