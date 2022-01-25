import {
    SectionContainer,
    SectionFlex,

    ConentContainer,
    Description,
    Title,

    ImageContainer,

    Background,
    VideoBg
} from './HeroSection.styled';

import {
    Section
} from '../Home.styled'

import { Button } from '../../../styles/Button.styled';

const HeroSection = () => {
    return (
        <Section>
            <Background>
                <VideoBg autoPlay logo muted src='./videos/video.mp4' type='video/mp4' />
            </Background>
            {/* <Container> */}
            <SectionFlex>
                <ConentContainer>
                    <Title>
                        Welcome to the new Paradigm of
                        <br /> <span>Networking</span> in Sports and Entertainment
                    </Title>
                    <Description>Stop Researching and Start Choosing</Description>
                    <Button>Join Now</Button>
                </ConentContainer>

                {/* <ImageContainer>
                    <img src="./images/home/online_transactions.svg"></img>
                </ImageContainer> */}
            </SectionFlex>
            {/* </Container> */}
        </Section >
    )
}



export default HeroSection
