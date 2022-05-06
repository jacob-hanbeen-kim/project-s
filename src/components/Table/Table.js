import {
    Container,
    TableWrapper,
    StyledTable,
    TableHead,
    TableHeader,
    TableHeaderSticky,
    TableBody,
    TableRow,
    TableData,
    TableDataSticky,
    ProfilePhoto,
    ProfileIcon
} from './Table.styled'

const Table = ({ headers, datas, onClick }) => {

    const populateRow = (row) => {
        return headers.map((col, idx) => {
            if (idx === 0) {
                // return <TableDataSticky data-id={row.id} onClick={onClick}>{row[col.key]}</TableDataSticky>
                return (
                    <TableData>
                        <ProfilePhoto>
                            <ProfileIcon></ProfileIcon>
                        </ProfilePhoto>
                    </TableData>
                )
            } else {
                return <TableData key={idx}>{row[col.key]}</TableData>
            }
        });
    }

    return (
        <Container>
            <TableWrapper>
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((col) => {
                                    // if (col.key === 'name') {
                                    // return <TableHeaderSticky key={col.key}>{col.label}</TableHeaderSticky>
                                    // } else {
                                    return <TableHeader key={col.key}>{col.label}</TableHeader>
                                    // }
                                })
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((row, idx) => {
                            return (
                                <TableRow key={row.id} isOdd={idx % 2 === 0}>
                                    {populateRow(row)}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </StyledTable>
            </TableWrapper>
        </Container>
    )
}

export default Table