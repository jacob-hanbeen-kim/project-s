import { Button } from '../../../styles/Button.styled';
import {
    Container,
    ContentContainer,
    Header,
    BtnWrapper,
    ImageContainer
} from '../OnboardingCard/OnboardingCard.styled';

const SponsorOnboardingCard = ({
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

export default SponsorOnboardingCard