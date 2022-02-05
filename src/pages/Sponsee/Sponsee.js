import {
    Container,
    SectionContainer
} from './Sponsee.styled';

// sections
import HeroSection from './HeroSection/HeroSection';
import { Tabs } from '../../components';
import ProfileSection from './ProfileSection/ProfileSection';
import AccomplishmentSection from './AccomplishmentSection/AccomplishmentSection';

const Sponsee = ({ currentAccount }) => {
    return (
        <Container>
            <HeroSection currentAccount={currentAccount} />
            <Tabs>
                <ProfileSection label="Profile" />
                {/* <AccomplishmentSection label="Accomplishments" /> */}
                <div label="Locker Room">Locker Room Section</div>
                <div label="Past Partnerships">Past PartnerShips Sectione</div>
            </Tabs>
        </Container>
    )
}

export default Sponsee
