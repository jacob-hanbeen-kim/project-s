import {
    Container
} from './Sponsor.styled';

// sections
import ProfileSection from './ProfileSection/ProfileSection';
import { Tabs } from '../../../components';

const Sponsor = ({ user, profileImg, profileBg }) => {

    return (
        <Container>
            <Tabs noBorder={true} align='flex-start'>
                <ProfileSection label="Profile" username={user?.firstName} />
                <div label="Market Place">Market Place Section</div>
                <div label="Past Partnerships">Past PartnerShips Sectione</div>
            </Tabs>
        </Container>
    )
}

export default Sponsor