import { useState } from 'react';
import {
    Section,
    LogoContainer,
    CallToAction,
    TextWrapper
} from './HeroSection.styled'

import { FixedBackground, InputWithButton, Logo, SearchBox, Text } from '../../../components';

import WaitlistService from '../../../services/waitlist-services';

const HeroSection = () => {

    const [email, setEmail] = useState('');

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
                        onChange={setEmail}
                        onClick={onSubmit}
                        inputPlaceHolder='Your Email Address'
                        btnText='Join Now'
                        type="email"
                    />
                </CallToAction>
            </Section>
        </>
    )
}

export default HeroSection