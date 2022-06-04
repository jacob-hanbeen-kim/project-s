import {
    Container,
    SideBarContainer,
    ApparelContainer,
    ImageWrapper
} from './LockerRoomSection.styled';

import SideFormBar from './SideFormBar/SideFormBar';
import { Carousel, ImageMap } from '../../../components';

const images = [
    {
        src: process.env.PUBLIC_URL + '/images/account/lockerRoom/pants.svg',
        alt: 'pants'
    },
    {
        src: process.env.PUBLIC_URL + '/images/account/lockerRoom/shirts.svg',
        alt: 'shirts'
    },
    {
        src: process.env.PUBLIC_URL + '/images/account/lockerRoom/socks.svg',
        alt: 'socks'
    }
]

const LockerRoomSection = ({ user }) => {
    return (
        <Container>
            <SideBarContainer>
                <SideFormBar />
            </SideBarContainer>
            <ApparelContainer>
                <Carousel>
                    <ImageMap id={images[1].alt} image={images[1].src}>
                        <area alt="left chest" title="left chest" coords="105,100,221,169" shape="rect" />
                        <area alt="right chest" title="right chest" coords="244,102,358,171" shape="rect" />
                        <area alt="stomach" title="stomach" coords="143,255,323,360" shape="rect" />
                        {/* <area alt="right arm top" title="right arm top" coords="405,137,430,126,438,146,413,156" shape="poly" /> */}
                        {/* <area alt="right arm bottom" title="right arm bottom" coords="419,173,431,202,454,193,445,163" shape="poly" /> */}
                        {/* <area alt="right shoulder" title="right shoulder" coords="312,23,308,42,367,60,373,42" shape="poly" /> */}
                        {/* <area alt="left shoulder" title="left shoulder" coords="95,41,100,60,157,43,152,23" shape="poly" /> */}
                        {/* <area alt="left arm bottom" title="left arm bottom" coords="10,193,31,203,43,173,18,160" shape="poly" /> */}
                        {/* <area alt="left arm top" title="left arm top" coords="27,136,53,148,62,128,38,114" shape="poly" /> */}
                    </ImageMap>
                    <ImageWrapper><img src={images[0].src} alt={images[0].alt} /></ImageWrapper>
                    <ImageWrapper><img src={images[1].src} alt={images[1].alt} /></ImageWrapper>
                    <ImageWrapper><img src={images[2].src} alt={images[2].alt} /></ImageWrapper>
                    <ImageWrapper><img src={images[0].src} alt={images[0].alt} /></ImageWrapper>
                </Carousel>
            </ApparelContainer>
        </Container>
    )
}

export default LockerRoomSection
