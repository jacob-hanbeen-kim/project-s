import {
    Container
} from './Sponsee.styled';

// sections
import HeroSection from './HeroSection/HeroSection';
import { Tabs } from '../../components';
import ProfileSection from './ProfileSection/ProfileSection';
import LockerRoomSection from './LockerRoomSection/LockerRoomSection';

const Sponsee = ({ user, profileImg, profileBg }) => {
    return (
        <Container>
            <HeroSection user={user} profileImg={profileImg} profileBg={profileBg} />
            <Tabs noBorder={true} align='flex-start'>
                <ProfileSection label="Profile" />
                <LockerRoomSection label="Locker Room" />
                <div label="Past Partnerships"></div>
            </Tabs>
        </Container>
    )
}

export default Sponsee
