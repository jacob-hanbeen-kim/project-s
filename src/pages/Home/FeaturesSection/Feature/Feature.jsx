import React from 'react'
import { useTheme } from 'styled-components';
import { Image, Text } from '../../../../components';
import {
    Conatiner,
    Content,
    TextContainer,
    ImageContainer
} from './Feature.styled';

const Feature = ({ title, description, image, imageFirst }) => {
    const theme = useTheme();

    return (
        <Conatiner>
            <Content imageFirst={imageFirst}>
                <TextContainer>
                    <Text variant='h4' color={theme.colors.primaryDark}>
                        {title}
                    </Text>
                    <Text variant='h2' color='rgba(150, 150, 150, 1)' fontWeight='normal'>
                        {description}
                    </Text>
                </TextContainer>
                <ImageContainer>
                    <img src={image} alt={image} />
                </ImageContainer>
            </Content>
        </Conatiner>
    )
}

export default Feature