import { useNavigate } from 'react-router-dom';
import {
    OnboardingContainer,
    TitleContainer,
    OnboardingCardContainer,
    ActionItem,
    ActionItemContainer
} from './Onboarding.styled'

import OnboardingCard from './OnboardingCard/OnboardingCard';
import { sponsee, sponsor, agent } from './OnboardingData';

const Onboarding = () => {

    const navigate = useNavigate();

    return (
        <OnboardingContainer>
            <TitleContainer>
                <h1> Welcome to Defiact! </h1>
                <p> Find, Negotiate, and Sign Sports Sponsorships Deals. Digitally.</p>
                <p> Let’s get started! Tell us who you are: </p>
            </TitleContainer>
            <OnboardingCardContainer>
                <OnboardingCard {...sponsee} />
                <OnboardingCard {...sponsor} />
                <OnboardingCard {...agent} />
            </OnboardingCardContainer>
            <ActionItemContainer>
                <ActionItem onClick={() => navigate('/login')}>I already have an account / Sign-in</ActionItem>
                <ActionItem>Forgot Password?</ActionItem>
            </ActionItemContainer>
        </OnboardingContainer>
    )

}

export default Onboarding