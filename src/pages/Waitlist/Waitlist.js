import {
    Container
} from './Waitlist.styled';
import HeroSection from './HeroSection/HeroSection';
import DemoSection from './DemoSection/DemoSection';
import { InfoSection } from '../../components';

import { search, sponsor, lockerRoom, negotiation } from './InfoSectionData'

const Waitlist = () => {
    return (
        <Container>
            <HeroSection />
            <InfoSection {...search} />
            <InfoSection {...sponsor} />
            <InfoSection {...lockerRoom} />
            <InfoSection {...negotiation} />
        </Container>
    )
}

export default Waitlist