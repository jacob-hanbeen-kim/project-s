import {
    StyledCarousel,
    CarouselContainer,
    SlickSlider,
    ButtonSlider,
    SlickList,
    SlickSlide,
    SlickTrack,
    SlickDots,


    CarouselCard,
    CarouselCardImage,
    CarouselCardContent
} from '../styles/Carousel.styled';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Card2 from './Card2';

const Carousel = ({ children }) => {
    return (
        <StyledCarousel>
            <CarouselContainer>
                <SlickSlider>
                    <ButtonSlider direction="left">
                        <FaAngleLeft />
                    </ButtonSlider>
                    <SlickList>
                        <SlickTrack>
                            {/* <SlickSlide>
                                <CarouselCard>
                                    <a href="/">
                                        <CarouselCardImage>
                                            <img src="./images/uniform.jpg"></img>
                                        </CarouselCardImage>
                                        <CarouselCardContent>
                                            <h1>Content Title</h1>
                                            <p>Content Details Content Details Content Details Content Details Content Details Content Details Content Details</p>
                                        </CarouselCardContent>
                                    </a>
                                </CarouselCard>
                            </SlickSlide>
                            <SlickSlide>
                                <CarouselCard>
                                    <a href="/">
                                        <CarouselCardImage>
                                            <img src="./images/uniform.jpg"></img>
                                        </CarouselCardImage>
                                        <CarouselCardContent>
                                            <h1>Content Title</h1>
                                            <p>Content Details Content Details Content Details Content Details Content Details Content Details Content Details</p>
                                        </CarouselCardContent>
                                    </a>
                                </CarouselCard>
                            </SlickSlide> */}
                            {/* <SlickSlide>
                                <CarouselCard>
                                    <a href="/">
                                        <CarouselCardImage>
                                            <img src="./images/uniform.jpg"></img>
                                        </CarouselCardImage>
                                        <CarouselCardContent>
                                            <h1>Content Title</h1>
                                            <p>Content Details Content Details Content Details Content Details Content Details Content Details Content Details</p>
                                        </CarouselCardContent>
                                    </a>
                                </CarouselCard>
                            </SlickSlide>
                            <SlickSlide>
                                <CarouselCard>
                                    <a href="/">
                                        <CarouselCardImage>
                                            <img src="./images/uniform.jpg"></img>
                                        </CarouselCardImage>
                                        <CarouselCardContent>
                                            <h1>Content Title</h1>
                                            <p>Content Details Content Details Content Details Content Details Content Details Content Details Content Details</p>
                                        </CarouselCardContent>
                                    </a>
                                </CarouselCard>
                            </SlickSlide> */}
                            <SlickSlide>
                                <Card2
                                    image="./images/uniform.jpg"
                                    title="Uniform Logo"
                                    details="add custom logo to our team's uniform"
                                    buttonTxt="Learn More"
                                />
                            </SlickSlide>
                            <SlickSlide>
                                <Card2
                                    image="./images/uniform.jpg"
                                    title="Uniform Logo"
                                    details="add custom logo to our team's uniform"
                                    buttonTxt="Learn More"
                                />
                            </SlickSlide>
                            <SlickSlide>
                                <Card2
                                    image="./images/uniform.jpg"
                                    title="Uniform Logo"
                                    details="add custom logo to our team's uniform"
                                    buttonTxt="Learn More"
                                />
                            </SlickSlide>
                            <SlickSlide>
                                <Card2
                                    image="./images/uniform.jpg"
                                    title="Uniform Logo"
                                    details="add custom logo to our team's uniform"
                                    buttonTxt="Learn More"
                                />
                            </SlickSlide>
                        </SlickTrack>
                    </SlickList>
                    <ButtonSlider direction="right">
                        <FaAngleRight />
                    </ButtonSlider>
                    <SlickDots>
                        <li><button></button></li>
                        <li><button></button></li>
                        <li><button></button></li>
                        <li><button></button></li>
                        <li><button></button></li>
                    </SlickDots>
                </SlickSlider>
            </CarouselContainer>
        </StyledCarousel>
    )
}

export default Carousel
