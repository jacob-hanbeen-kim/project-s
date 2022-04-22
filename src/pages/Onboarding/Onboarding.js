import {
    OnboardingContainer,
    TitleContainer,
    OnboardingCardContainer
} from './Onboarding.styled'
import { useAuth } from "../../contexts/AuthContext";

import OnboardingCard from './OnboardingCard/OnboardingCard';
import { sponsee, sponsor, agent } from './OnboardingData';

const Onboarding = () => {
    return (
        <OnboardingContainer>
            <TitleContainer>
                <h1> Welcome to Defiact! </h1>
                <h3> Find, Negotiate, and Sign Sports Sponsorships Deals. Digitally.</h3>
                <h3> Let’s get started! Tell us who you are: </h3>
            </TitleContainer>
            <OnboardingCardContainer>
                <OnboardingCard {...sponsee} isCurrentPlan={true} />
                <OnboardingCard {...sponsor} />
                <OnboardingCard {...agent} />
            </OnboardingCardContainer>
        </OnboardingContainer>
    )

}

export default Onboarding