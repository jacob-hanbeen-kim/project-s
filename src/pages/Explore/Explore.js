import { useCallback, useEffect, useState } from 'react'
import {
    Container,
    SidebarContainer,
    ContentContainer
} from './Explore.styled'

import Sidebar from './Sidebar/Sidebar'
import ExploreList from './ExploreList/ExploreList'

import { Tabs } from '../../components'
import UserService from '../../services/users-service'

const localData = require('./data.json');;

const filterData = ({ tableData, filters }) => {
    console.log(filters, !filters);
    if (!filters) return tableData;

    let filteredData = [];

    // UserService.getUsers().then((res) => {
    //     filteredData = res;
    //     console.log('res', res);
    // })

    // const filteredData = tableData.filter((data) => {
    //     return data;
    // });

    return filteredData;
}

const Explore = () => {

    const [data, setData] = useState([]);
    const [filters, setFilters] = useState(null);

    const filteredData = useCallback(
        () => filterData({ tableData: data, filters }),
        [data, filters]
    );

    useEffect(() => {
        console.log('res', localData);
        setData(localData);
        // UserService.getUsers().then((res) => {
        //     setData(res);
        //     console.log('data', res);
        // })
    }, [])

    return (
        <Container>
            <SidebarContainer>
                <Sidebar setFilters={setFilters} />
            </SidebarContainer>
            <ContentContainer>
                <Tabs sticky={false}>
                    <ExploreList label="All" data={filteredData()} />
                    <div label="Sponsor"></div>
                    <div label="Team"></div>
                    <div label="Athelete"></div>
                    <div label="Other"></div>
                </Tabs>
            </ContentContainer>
        </Container>
    )
}

export default Explore