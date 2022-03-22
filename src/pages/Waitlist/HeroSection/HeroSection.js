import {
    Container,
    LeftSection,
    RightSection,
    TextWrapper,
    CallToAction,
    InputWrapper
} from './HeroSection.styled';

import { useState } from 'react';
import { FixedBackground, InputWithButton, Logo, SearchBox, Text, Image } from '../../../components';
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
        <Container>
            <LeftSection>
                <TextWrapper>
                    <Text variant='h1'>
                        Welcome to the New Pardigm of
                    </Text>
                    <Text variant='h1'>
                        Networking and Engagement
                    </Text>
                    <Text variant='h1'>
                        in Sports and Entertainment
                    </Text>
                </TextWrapper>
                <CallToAction>
                    <TextWrapper center={true}>
                        <Text variant='h4' textAlign='center'>
                            Join our waiting list to be part of the beta-test <br />
                            Launching march, 2022
                        </Text>
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
                </CallToAction>
            </LeftSection>
            <RightSection>
                <Image src={process.env.PUBLIC_URL + '/images/home/contract.svg'} />
            </RightSection>
        </Container>
    )
}

export default HeroSection