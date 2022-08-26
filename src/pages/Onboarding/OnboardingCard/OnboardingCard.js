import { useNavigate } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    Header,
    BtnWrapper,
    ImageContainer,
    ButtonItems
} from './OnboardingCard.styled';

const OnboardingCard = ({
    option,
    description,
    image
}) => {

    const navigate = useNavigate();
    const navigateOnboarding = () => {
        navigate(`/onboarding/${option}`)
    }
    return (
        <Container>
            <ContentContainer>
                <Header>{description}</Header>
            </ContentContainer>
            <ImageContainer>
                <img src={process.env.PUBLIC_URL + image} alt={option}/>
            </ImageContainer>
            <div>
                <BtnWrapper>
                    <ButtonItems onClick={navigateOnboarding}>
                        Select
                    </ButtonItems>
                </BtnWrapper>
            </div>
        </Container >
    )
}

export default OnboardingCard
