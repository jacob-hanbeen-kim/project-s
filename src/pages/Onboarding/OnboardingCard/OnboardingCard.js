import { Button } from '../../../styles/Button.styled';
import {
    Container,
    ContentContainer,
    Header,
    BtnWrapper,
    ImageContainer
} from './OnboardingCard.styled';

const OnboardingCard = ({
    option,
    image
}) => {
    return (
        <Container>
            <ContentContainer>
                <Header>{option}</Header>
            </ContentContainer>
            <ImageContainer>

            </ImageContainer>
            <div>
                <BtnWrapper>
                    <Button>
                        Select
                    </Button>
                </BtnWrapper>
            </div>
        </Container >
    )
}

export default OnboardingCard
