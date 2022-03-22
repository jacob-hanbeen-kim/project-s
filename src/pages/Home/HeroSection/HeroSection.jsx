import {
    Container,
    ContentWapper,
    TextWrapper,
    CallToAction,
    InputWrapper,
    CardContainer
} from './HeroSection.styled';

import { useState } from 'react';
import { FixedBackground, ImageBackground, InputWithButton, Text, CardWithIcon } from '../../../components';
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
            <ImageBackground
                src='images/home/background.png'
                opacity={1}
                maskColor={true}
                offset='70px'
                bgPositionY='top'
                blur='0'
            />
            <Container>
                <ContentWapper>
                    <TextWrapper>
                        <Text variant='h2' color='white'>
                            WELCOME TO SPORTS - DECENTRALIZED
                        </Text>
                        <Text variant='h1' color='white'>
                            Find, Negotiate, and Sign
                        </Text>
                        <Text variant='h1' color='white'>
                            Sports Sponsorships Deals. Digitally.
                        </Text>
                    </TextWrapper>
                    <CallToAction>
                        <InputWrapper>
                            <InputWithButton
                                onChange={setEmail}
                                onClick={onSubmit}
                                inputPlaceHolder='Your Email'
                                btnText='Join Wait List'
                                type="email"
                            />
                        </InputWrapper>
                        <Text variant='subtitle' textAlign='center' color='white'>
                            beta test launch | march 2022
                        </Text>
                    </CallToAction>
                    <CardContainer>
                        <CardWithIcon
                            image={"images/home/increaseIcon.svg"}
                            title={"More Exposure"}
                            detail={"Find potential sponsor and create more oportunities"}
                        />
                        <CardWithIcon
                            image={"images/home/contractIcon.svg"}
                            title={"More Exposure"}
                            detail={"Find potential sponsor and create more oportunities"}
                        />
                        <CardWithIcon
                            image={"images/home/feeIcon.svg"}
                            title={"More Exposure"}
                            detail={"Find potential sponsor and create more oportunities"}
                        />
                    </CardContainer>
                    <TextWrapper>
                        <Text variant='subtitle' color='white'>
                            The New Paradigm of Network and Engagement in Sports and Entertainment
                        </Text>
                    </TextWrapper>
                </ContentWapper>
            </Container>
        </>
    )
}

export default HeroSection