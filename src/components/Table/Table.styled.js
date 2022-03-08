import styled from 'styled-components'

const borderColor = 'rgba(0, 0, 0, 0.5)';

export const Container = styled.div`
    height: 100%;
    position: relative;

    background-color: ${({ theme }) => theme.colors.background};
`

export const TableWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;

    overflow: auto;

    border: 1px solid ${borderColor};
    border-radius: ${({ theme }) => theme.border.radius};
`

export const StyledTable = styled.table`
    border-collapse: separate;
    border-spacing: 0;

    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    min-width: 100%;
    min-height: 100%;
    
    & th:first-child,
    & td:first-child {
        /* Apply a right border on the first <td> or <th> in a row */
        border-right: 1px solid ${borderColor};
    }

    & th,
    & td {
        padding: 0px 20px;
        border-bottom: 1px solid ${borderColor};
        background-color: ${({ theme }) => theme.colors.surface};

        text-align: left;
        
        width: 200px;
        min-width: 200px;
        max-width: 200px;

        height: 50px;
        min-height: 50px;
        max-height: 50px;
        
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

export const TableHead = styled.thead`
    position: sticky;
    z-index: 2;
    top: 0;
`

export const TableHeader = styled.th`
`

export const TableHeaderSticky = styled(TableHeader)`
    position: sticky;
    z-index: 1;
    left: 0;
`

export const TableBody = styled.tbody`
`

export const TableRow = styled.tr`
`

export const TableData = styled.td`
`

export const TableDataSticky = styled(TableData)`
    position: sticky;
    z-index: 1;
    left: 0;
`