import {
    Container,
    Content,
    TextWrapper,
    ImageContainer,
    ImageWrapper
} from './Clients.style'

import { Carousel, Text } from '../../../components'
const images = [
    'images/home/clients/lpga.svg',
    'images/home/clients/ncaa.svg',
    'images/home/clients/pga.svg',
    'images/home/clients/ping.svg',
    'images/home/clients/qone.svg',
    'images/home/clients/samyang.svg',
    'images/home/clients/volvik.svg',
]

const Clients = () => {
    return (
        <Container>
            <Content>
                <TextWrapper>
                    <Text variant='h1'>
                        Our Clients
                    </Text>
                </TextWrapper>
                <Carousel
                    width='80vw'
                    displayCount={4}
                    noOpacity={true}
                    noScale={true}
                >
                    {
                        images.map((image, idx) =>
                            <ImageContainer key={idx}>
                                <ImageWrapper>
                                    <img src={image} alt={image} />
                                </ImageWrapper>
                            </ImageContainer>
                        )
                    }
                </Carousel>
            </Content>
        </Container>
    )
}

export default Clients