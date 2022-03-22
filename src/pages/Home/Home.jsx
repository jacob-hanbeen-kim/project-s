import {
    Container
} from './Home.styled';

import HeroSection from './HeroSection/HeroSection';
import StatSection from './StatSection/StatSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import Clients from './Clients/Clients';

const Home = () => {
    return (
        <Container>
            <HeroSection />
            <StatSection />
            <FeaturesSection />
            <Clients />
        </Container>
    )
}

export default Home