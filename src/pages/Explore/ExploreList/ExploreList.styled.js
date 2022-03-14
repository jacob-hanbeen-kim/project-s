import styled from 'styled-components';

export const TableContainer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */

    height: 90vh;
    padding: 20px 80px;
`

export const StyledTable2 = styled.table`
    width: 100%;
    /* table-layout: fixed; */
    border-collapse: collapse;
    border: 1px solid rgba(0, 0, 0, 0.8);

    th {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    thead td {
        font-weight: 800;
    }

    tbody {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.surface};
    }

    tr {
        width: 100%;
    }

    tbody tr:hover {
        background-color: ${({ theme }) => theme.colors.border};
    }


    th,
    td {
        padding: 20px 15px;
        text-align: left;
        font-weight: 500;
        font-size: 17px;
        color: ${({ theme }) => theme.colors.onSurface};

        border: 1px solid rgba(0, 0, 0, 0.8);
    }

`