import {
    Container,
    Content,
    ContentWapper,
    TextWrapper,
    CallToAction,
    InputWrapper
} from './HeroSection.styled';

import { useState } from 'react';
import { ImageBackground, InputWithButton, Text } from '../../../components';
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
            <ImageBackground
                src='images/home/background.png'
                opacity={1}
                maskColor={true}
                bgPositionY='top'
                blur='0'
            />
            <Content>
                <ContentWapper>
                    <TextWrapper>
                        <Text variant='h3' color='rgba(200,200,200,1)'>
                            WELCOME TO SPORTS - DECENTRALIZED
                        </Text>
                        <Text variant='h2' color='white'>
                            Find, Negotiate, and Sign
                        </Text>
                        <Text variant='h2' color='white'>
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
                                fontSize='15px'
                            />
                        </InputWrapper>
                        <Text variant='h4' textAlign='center' color='rgba(200,200,200,1)'>
                            beta test launch | may 2022
                        </Text>
                    </CallToAction>
                </ContentWapper>
            </Content>
        </Container>
    )
}

export default HeroSection