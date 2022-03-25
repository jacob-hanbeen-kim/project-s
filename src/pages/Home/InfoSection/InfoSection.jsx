import {
    Container,
    TextWrapper,
    CardContainer
} from './InfoSection.styled'

import { CardWithIcon, Text } from '../../../components';

const InfoSection = () => {
    return (
        <Container>
            <TextWrapper>
                <Text variant='h2'>
                    The New Paradigm of Network and Engagement in Sports and Entertainment
                </Text>
            </TextWrapper>
            <CardContainer>
                <CardWithIcon
                    image={"images/home/increaseIcon.svg"}
                    title={"More Exposure"}
                    detail={"Find potential sponsor and create more oportunities"}
                />
                <CardWithIcon
                    image={"images/home/contractIcon.svg"}
                    title={"More Exposure"}
                    detail={"Find potential sponsor and create more oportunities"}
                />
                <CardWithIcon
                    image={"images/home/feeIcon.svg"}
                    title={"More Exposure"}
                    detail={"Find potential sponsor and create more oportunities"}
                />
            </CardContainer>
        </Container>
    )
}

export default InfoSection