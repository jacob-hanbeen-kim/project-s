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
    TableDataSticky
} from './Table.styled'

const Table = ({ headers, datas, onClick }) => {
    return (
        <Container>
            <TableWrapper>
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((col) => {
                                    if (col.key === 'name') {
                                        return <TableHeaderSticky key={col.key}>{col.label}</TableHeaderSticky>
                                    } else {
                                        return <TableHeader key={col.key}>{col.label}</TableHeader>
                                    }
                                })
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableDataSticky data-id={row.id} onClick={onClick}>{row.name}</TableDataSticky>
                                    <TableData>{row.sports}</TableData>
                                    <TableData>{row.location}</TableData>
                                    <TableData>{row.description}</TableData>
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