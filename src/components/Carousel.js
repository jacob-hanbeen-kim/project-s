import {
    StyledCarousel,
    CarouselContainer,
    SlickSlider,
    SlickList,
    SlickSlide,
    SlickTrack
} from '../styles/Carousel.styled';

const Carousel = ({ child }) => {
    return (
        <StyledCarousel>
            <CarouselContainer>
                <SlickSlider>
                    <SlickList>
                        <SlickTrack>
                            <SlickSlide>
                                {child}
                            </SlickSlide>
                        </SlickTrack>
                    </SlickList>
                </SlickSlider>
            </CarouselContainer>
        </StyledCarousel>
    )
}

export default Carousel
