import {
    Container
} from './Sponsee.styled';

import { Tabs } from '../../../components';
import ProfileSection from './ProfileSection/ProfileSection';
import LockerRoomSection from './LockerRoomSection/LockerRoomSection';

const Sponsee = ({ user, profileImg, profileBg }) => {
    return (
        <Container>
            <Tabs noBorder={true} align='flex-start'>
                <ProfileSection label="Profile" />
                <LockerRoomSection label="Locker Room" />
                <div label="Past Partnerships"></div>
            </Tabs>
        </Container>
    )
}

export default Sponsee
