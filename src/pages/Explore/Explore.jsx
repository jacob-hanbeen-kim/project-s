import { useEffect, useState } from 'react'
import {
    Container,
    SidebarContainer,
    ContentContainer
} from './Explore.styled'

import Sidebar from './Sidebar/Sidebar'
import UserService from '../../services/users-service'
import View from './View/View'

// const localData = require('./data.json');
// const localData = require('./View/ListView/data.json');
const tabs = [
    'Athletes',
    'Team',
    'Brand',
    'Agents',
    'Sponsors'
]

const Explore = () => {

    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [filters, setFilters] = useState({});

    const applyFilter = (e, value, callback) => {
        e.preventDefault();
        setFilters(value);
        callback && callback();

        // #TODO: add filter
        // SponseeService.getUsers(filter).then((res) => {
        //     setData(res);
        //     console.log('filtered', res);
        // });
    }

    const handleTabToggle = (tab) => {
        setActiveTab(tab);
        if (tab === 'Athletes' || tab === 'Team' || tab === 'Brand') {
            UserService.getAllSponseeProfiles().then((res) => {
                setData(res);
            })
        } else if (tab === 'Sponsors') {
            UserService.getAllSponsorProfiles().then((res) => {
                setData(res);
            })
        } else if (tab === 'Agents') {
            UserService.getAllAgencyProfiles().then((res) => {
                setData(res);
            })
        }
    }

    useEffect(() => {
        UserService.getAllSponseeProfiles().then((res) => {
            console.log('data', res);
            setData(res);
        })
    }, [])

    return (
        <Container>
            <SidebarContainer>
                <Sidebar applyFilter={applyFilter} />
            </SidebarContainer>
            <ContentContainer>
                <View
                    data={data}
                    tabs={tabs}
                    activeTab={activeTab}
                    onClickTab={handleTabToggle}
                    filters={filters}
                    clearFilter={(e) => applyFilter(e, {})}
                />
            </ContentContainer>
        </Container>
    )
}

export default Explore