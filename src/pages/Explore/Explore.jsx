import { useCallback, useEffect, useState } from 'react'
import {
    Container,
    SidebarContainer,
    ContentContainer
} from './Explore.styled'

import Sidebar from './Sidebar/Sidebar'

import UserService from '../../services/users-service'
import View from './View/View'

// const localData = require('./data.json');
const localData = require('./View/ListView/data.json');

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
        UserService.getUserProfiles().then((res) => {
            console.log('data', res);
            setData(res);
        })
    }, [])

    return (
        <Container>
            <SidebarContainer>
                <Sidebar setFilters={setFilters} />
            </SidebarContainer>
            <ContentContainer>
                {/* <div label="Sponsor"></div>
                    <div label="Team"></div>
                    <div label="Athelete"></div>
                    <div label="Other"></div> */}
                {/* </Tabs> */}
                <View data={data} />
            </ContentContainer>
        </Container>
    )
}

export default Explore