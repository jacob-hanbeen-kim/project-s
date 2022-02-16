import {
    Container,
    SectionContainer
} from './Sponsee.styled';

// sections
import HeroSection from './HeroSection/HeroSection';
import { Tabs } from '../../components';
import ProfileSection from './ProfileSection/ProfileSection';
import LockerRoomSection from './LockerRoomSection/LockerRoomSection';

const Sponsee = ({ user, profileImg, profileBg }) => {
    return (
        <Container>
            <HeroSection currentAccount={user?.id} username={user?.name} profileImg={profileImg} profileBg={profileBg} />
            <Tabs>
                <ProfileSection label="Profile" />
                <LockerRoomSection label="Locker Room" />
                <div label="Past Partnerships">Past PartnerShips Sectione</div>
            </Tabs>
        </Container>
    )
}

export default Sponsee
