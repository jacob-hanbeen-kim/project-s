import {
    TableContainer
} from './ExploreList.styled'

import { useCallback, useState } from 'react';
import { Table } from '../../../components';


const SORT_ORDER = {
    Ascending: 'asc',
    Descending: 'des'
}

const sortData = ({ tableData, sortKey, reverse }) => {

    if (!sortKey) return tableData;

    const sortedData = tableData.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
        return sortedData.reverse();
    }

    return sortedData;
}

const ExploreList = ({ data }) => {

    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState(SORT_ORDER.Ascending);

    const headers = [
        { key: "name", label: "Name" },
        { key: "sports", label: "Sports" },
        { key: "location", label: "Location" },
        { key: "description", label: "Description" }
    ]

    const sortedData = useCallback(
        () => sortData({ tableData: data, sortKey, reverse: sortOrder === SORT_ORDER.Descending }),
        [data, sortKey, sortOrder]
    );

    return (
        <TableContainer>
            <Table headers={headers} datas={sortedData()} />
        </TableContainer>
    )
}

export default ExploreList