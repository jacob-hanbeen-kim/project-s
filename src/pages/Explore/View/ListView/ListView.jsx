import {
    Container,
    Wrapper
} from './ListView.styled'

import { Table } from '../../../../components';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const ListView = ({ users }) => {

    const navigate = useNavigate();

    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState(SORT_ORDER.Ascending);

    const headers = [
        { key: "uerType", label: "Athletes" },
        { key: "name", label: "Name" },
        { key: "sports", label: "Sports" },
        { key: "team", label: "Team" },
        { key: "age", label: "Age" },
        { key: "location", label: "Location" },
        { key: "mediaScore", label: "Market Score" }
    ]

    const sortedData = useCallback(
        () => sortData({ tableData: users, sortKey, reverse: sortOrder === SORT_ORDER.Descending }),
        [users, sortKey, sortOrder]
    );

    const navigateToAccount = (e) => {
        const accountId = e.currentTarget.dataset.id;
        navigate(`/account/${accountId}`);
    }

    return (
        <Container>
            <Wrapper>
                <Table headers={headers} datas={sortedData()} onClick={navigateToAccount} />
            </Wrapper>
        </Container>
    )
}

export default ListView