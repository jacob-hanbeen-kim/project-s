import {
    Container,

    TabContainer,
    Tab
} from './Sponsee.styled';

import ProfileSection from './ProfileSection/ProfileSection';

const Sponsee = ({ currentAccount }) => {

    return (
        <>
            <ProfileSection currentAccount={currentAccount} />
            <TabContainer>
                <Tab>Profile</Tab>
                <Tab>Achievements</Tab>
                <Tab>Sponsors</Tab>
                <Tab>Contact Me</Tab>
            </TabContainer>
            <div>
                change sections based on the tab
            </div>
        </>
    )
}

export default Sponsee
