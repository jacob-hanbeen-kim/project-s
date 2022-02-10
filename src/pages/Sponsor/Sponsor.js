import {
    Container
} from './Sponsor.styled';

// sections
import HeroSection from './HeroSection/HeroSection';
import ProfileSection from './ProfileSection/ProfileSection';
import { Tabs } from '../../components';

const Sponsor = ({ currentAccount, username }) => {

    return (
        <Container>
            <HeroSection currentAccount={currentAccount} username={username} />
            <Tabs>
                <ProfileSection label="Profile" username={username} />
                <div label="Market Place">Market Place Section</div>
                <div label="Past Partnerships">Past PartnerShips Sectione</div>
            </Tabs>
        </Container>
    )
}

export default Sponsor