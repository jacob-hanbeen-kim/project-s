
import {
    Section,
    LogoContainer,
    CallToAction,
    TextWrapper
} from './HeroSection.styled'

import { FixedBackground, InputWithButton, Logo, SearchBox, Text } from '../../../components';

const HeroSection = () => {
    return (
        <>
            <FixedBackground src={process.env.PUBLIC_URL + '/images/waitlist/background.png'} opacity={0.6} />
            <Section>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <TextWrapper>
                    <Text variant='body'>Welcome to the New Pardigm of Networking and Engagement in Sports and Entertainment</Text>
                </TextWrapper>
                <TextWrapper>
                    <Text variant='h1'>Compare contracts</Text>
                    <Text variant='h1' invert={true}>Negotiate with confidence</Text>
                </TextWrapper>
                <CallToAction>
                    <TextWrapper>
                        <Text variant='h2'>Comming March 2022</Text>
                    </TextWrapper>
                    <InputWithButton
                        inputPlaceHolder='Your Email Address'
                        btnText='Join Now'
                    />
                </CallToAction>
            </Section>
        </>
    )
}

export default HeroSection