import {
    Container
} from './Sponsor.styled';

// sections
import HeroSection from './HeroSection/HeroSection';
import ProfileSection from './ProfileSection/ProfileSection';
import { Tabs } from '../../components';

const Sponsor = ({ user, profileImg, profileBg }) => {

    return (
        <Container>
            <HeroSection currentAccount={user?.id} username={user?.name} profileImg={profileImg} profileBg={profileBg} />
            <Tabs>
                <ProfileSection label="Profile" username={user?.name} />
                <div label="Market Place">Market Place Section</div>
                <div label="Past Partnerships">Past PartnerShips Sectione</div>
            </Tabs>
        </Container>
    )
}

export default Sponsor