import PropTypes from 'prop-types'
import {
    Container,
    TextContainer,
    TextWrap,
    ImageContainer,
    ImgWrap,
    Img
} from './DemoSection.styled'
import { Text } from '../../../components'
import React from 'react';

const DemoSection = React.forwardRef(({
    title,
    description,
    image,
    invert,
    layout,
    children
}, ref) => {
    return (
        <Container invert={invert}>
            <span ref={ref} />
            <TextContainer layout={layout}>
                <TextWrap invert={invert} layout={layout}>
                    <Text variant='h1' invert={true} transform='uppercase'>{title}</Text>

                    <Text variant='display2'>
                        {description}
                    </Text>
                </TextWrap>
            </TextContainer>
            <ImageContainer>
                <ImgWrap layout={layout}>
                    {/* <Img src={image} alt={title} /> */}
                    <Img>
                        {children}
                    </Img>
                </ImgWrap>
            </ImageContainer>
        </Container>
    )
});

DemoSection.defaultProps = {
    invert: false,
    layout: 'left'
}

export default DemoSection