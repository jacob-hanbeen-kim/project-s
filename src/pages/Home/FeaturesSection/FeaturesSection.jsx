import {
    Container,
    TextWrapper
} from './FeaturesSection.styled'
import { Text } from '../../../components'
import Feature from './Feature/Feature'

const FeaturesSection = () => {
    return (
        <Container>
            <TextWrapper>
                <Text variant='h1'>
                    Main Features
                </Text>
            </TextWrapper>
            <Feature
                title='SEARCH ENGINE'
                description={
                    <>
                        <span>Identify</span> teams, athletes, agents, brands, and sponsors to partner with - <span>in a matter of seconds</span>
                    </>
                }
                image='images/home/searchEngine.svg'
            />
            <Feature
                title='DECENTRALIZED SMART CONTRACTS'
                description={
                    <>
                        <span>Secure</span> your contracts and assets via our <span>smart contracts</span> system enabled by <span>Web 3.0</span> infrastructure
                    </>
                }
                image='images/home/smartContract.svg'
                imageFirst={true}
            />
            <Feature
                title='NFT MARKETPLACE'
                description={
                    <>
                        <span>Buy/sell</span> exclusive sports and entertainment NFTs on <span>our platform</span>
                    </>
                }
                image='images/home/nft.svg'
            />
            <Feature
                title='AI-GUIDED LEAD SCORING SYSTEM'
                description={
                    <>
                        Measure your <span>marketability</span>
                    </>
                }
                image='images/home/aiGuidance.svg'
                imageFirst={true}
            />
        </Container>
    )
}

export default FeaturesSection