import {
    SectionContainer,
    SectionFlex,

    ConentContainer,
    Description,
    Title,

    ImageContainer,
} from './HeroSection.styled';

import {
    Section
} from '../Home.styled'

import { Button } from '../../../styles/Button.styled';

import { VideoBackground } from '../../../components';

const HeroSection = () => {
    return (
        <Section>
            <VideoBackground autoPlay logo muted src='./videos/video.mp4' type='video/mp4' />
            {/* <Container> */}
            <SectionFlex>
                <ConentContainer>
                    <Title>
                        Welcome to the new Paradigm of
                        <br /> <span>Networking</span> in Sports and Entertainment
                    </Title>
                    <Description>Stop Researching Start Choosing</Description>
                    <Button dark={true} >Join Now</Button>
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
