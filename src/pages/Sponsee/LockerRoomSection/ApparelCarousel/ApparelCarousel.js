import React from 'react'
import {
    Container,
    CarouselContainer,
    Carousel,
    CarouselItem,
    LeftButton,
    RightButton
} from './ApparelCarousel.styled'

const ApparelCarousel = ({ images }) => {
    return (
        <Container>
            <CarouselContainer>
                <LeftButton />
                <Carousel>
                    {
                        images.map((image) => {
                            return (
                                <CarouselItem>
                                    <img src={image.src} alt={image.alt} />
                                </CarouselItem>
                            )
                        })
                    }
                </Carousel>
                <RightButton />
            </CarouselContainer>
        </Container>
    )
}

export default ApparelCarousel