import React, { useState } from 'react'
import {
    Container,
    CarouselContainer,
    View,
    Inner,
    CarouselItem,
    LeftButton,
    RightButton
} from './Carousel.styled'

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

const Carousel = ({ children }) => {
    // const [items, setItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(1);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        console.log(newIndex);
        setActiveIndex(newIndex);
    }

    return (
        <Container>
            <CarouselContainer>
                <LeftButton onClick={() => {
                    updateIndex(activeIndex - 1);
                }} />
                <View>
                    <Inner activeIndex={activeIndex}>
                        {
                            React.Children.map(children, (child, index) => {
                                return (
                                    <CarouselItem active={activeIndex === index}>
                                        {child}
                                    </CarouselItem>
                                )
                            })
                        }
                    </Inner>
                </View>
                <RightButton onClick={() => {
                    updateIndex(activeIndex + 1);
                }} />
            </CarouselContainer>
        </Container >
    )
}

export default Carousel