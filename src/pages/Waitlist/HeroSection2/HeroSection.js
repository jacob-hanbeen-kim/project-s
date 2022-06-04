import { useState } from 'react';
import {
    Section,
    LogoContainer,
    CallToAction,
    TextWrapper,
    InputWrapper,
    TopSection,
    MiddleSection,
    BottomSection,
    DownIcon,
    SneakPeakContainer
} from './HeroSection.styled'

import { useTheme } from 'styled-components';
import { FixedBackground, InputWithButton, Logo, SearchBox, Text } from '../../../components';

import WaitlistService from '../../../services/waitlist-services';

const HeroSection = ({ toDemoSection }) => {

    const [email, setEmail] = useState('');
    const theme = useTheme();

    const verifyEmail = async (email) => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(email)) {
            let response = await WaitlistService.getWaitlistById(email);
            console.log('response', response);
            if (response) {
                window.alert('You have already waitlisted!');
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    }

    const onSubmit = async () => {
        if (await verifyEmail(email)) {
            try {
                let success = await WaitlistService.addToWaitlist(email);

                if (success) {
                    window.alert("Successfully waitlisted");
                } else {
                    console.log("Something went wrong! Please try again");
                }
            } catch (e) {
                console.log('Error waitlisting user', e);
            }
        } else {
            window.alert("invalid email format");
        }

        setEmail('');
    }

    return (
        <>
            <FixedBackground src={process.env.PUBLIC_URL + '/images/waitlist/background.png'} opacity={0.6} maskColor={true} />
            <Section>
                <TopSection>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>

                </TopSection>
                <MiddleSection>
                    <TextWrapper>
                        <Text variant='h2' color={theme.colors.onPrimary}>
                            Welcome to the New Pardigm of <br />
                            Networking and Engagement
                            in Sports and Entertainment
                        </Text>
                    </TextWrapper>
                    <TextWrapper row={true}>
                        {/* <Text variant='h1' color={theme.colors.onPrimary}>Compare Contracts</Text> */}
                        <Text variant='h1' invert={true}>Compare Contracts / Negotiate with Confidence</Text>
                    </TextWrapper>

                </MiddleSection>
                <BottomSection>
                    <CallToAction>
                        <TextWrapper>
                            <Text variant='h4' color={theme.colors.onPrimary}>Coming March 2022</Text>
                        </TextWrapper>
                        <InputWrapper>
                            <InputWithButton
                                onChange={setEmail}
                                onClick={onSubmit}
                                inputPlaceHolder='Your Email Address'
                                btnText='Join Now'
                                type="email"
                            />
                        </InputWrapper>
                        <TextWrapper>
                            <Text variant='caption' invert={true}>
                                Please submit your email address to join our waiting list for <br />
                                participation in beta-test starting March 2022!
                            </Text>
                        </TextWrapper>
                    </CallToAction>
                    <SneakPeakContainer onClick={toDemoSection} >
                        <Text variant='caption'>
                            Take a sneak-peak at our platform
                        </Text>
                        <DownIcon />
                    </SneakPeakContainer>
                </BottomSection>
            </Section>
        </>
    )
}

export default HeroSection