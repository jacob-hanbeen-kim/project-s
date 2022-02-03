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
                <AccomplishmentSection label="Accomplishments" />
                <div label="Sponsors">Sponsor Section</div>
                <div label="Contact Me">Contact Me</div>
            </Tabs>
        </Container>
    )
}

export default Sponsee
