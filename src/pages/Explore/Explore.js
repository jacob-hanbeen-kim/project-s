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

// const localData = require('./data.json');;
const localData = require('./ExploreList/data.json');

const Explore = () => {

    const [data, setData] = useState([]);
    const [filters, setFilters] = useState(null);

    const onClickFilter = (label) => {
        const filter = label === 'All' ? null : { usertype: label };

        UserService.getUsers(filter).then((res) => {
            setData(res);
            console.log('filtered', res);
        });
    }

    useEffect(() => {
        // console.log('res', localData);
        // setData(localData);
        console.log("HERE!!");
        UserService.getUsers().then((res) => {
            setData(res);
            console.log('data', res);
        })
    }, [])

    return (
        <Container>
            <SidebarContainer>
                <Sidebar setFilters={setFilters} />
            </SidebarContainer>
            <ContentContainer>
                <Tabs sticky={false} onClick={onClickFilter}>
                    <ExploreList label="All" data={data} />
                    <ExploreList label="Sponsor" data={data} />
                    <ExploreList label="Team" data={data} />
                    <ExploreList label="Athelete" data={data} />
                    <ExploreList label="Other" data={data} />
                    {/* <div label="Sponsor"></div>
                    <div label="Team"></div>
                    <div label="Athelete"></div>
                    <div label="Other"></div> */}
                </Tabs>
            </ContentContainer>
        </Container>
    )
}

export default Explore