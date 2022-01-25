import {
    HomeContainer,
    Section
} from './Home.styled'

import HeroSection from './HeroSection/HeroSection';
import VipSection from './VipSection/VipSection';
import InfoSection from '../../components/InfoSection';
import { connectVip, aiGuidance, blockChain } from './Data'

const Home = () => {
    return (
        <HomeContainer>
            <HeroSection />
            <InfoSection {...connectVip} />
            <InfoSection {...aiGuidance} />
            <InfoSection {...blockChain} />
            {/* <InfoSection {...numbers} /> */}
            {/* <Section>
            <h1>AI Guidance</h1>
        </Section>
        <Section>
            <h1>Blockchain</h1>
        </Section>
        <Section>
            <h1>Name by the Numbers</h1>
        </Section> */}
        </HomeContainer>
    )
}

export default Home
