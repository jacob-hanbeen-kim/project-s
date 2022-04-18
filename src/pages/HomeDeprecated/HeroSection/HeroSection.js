import {
    Section,
    SectionContainer,
    SectionFlex,

    ConentContainer,
    Description,
    Title,

    ImageContainer,
} from './HeroSection.styled';

import { Button } from '../../../styles/Button.styled';

import { VideoBackground } from '../../../components';

const HeroSection = () => {
    return (
        <Section>
            <VideoBackground autoPlay logo muted src={process.env.PUBLIC_URL + '/videos/video.mp4'} type='video/mp4' />
            {/* <Container> */}
            <SectionFlex>
                <ConentContainer>
                    <Title>
                        Welcome to the new Paradigm of
                        <br /> <span>Networking</span> in Sports and Entertainment
                    </Title>
                    <Description>Stop Researching Start Choosing</Description>
                    <Button invert={true} >Join Now</Button>
                </ConentContainer>

                {/* <ImageContainer>
                    <img src={{process.env.PUBLIC_URL + '/images/home/online_transactions.svg"}></img>
                </ImageContainer> */}
            </SectionFlex>
            {/* </Container> */}
        </Section >
    )
}



export default HeroSection
