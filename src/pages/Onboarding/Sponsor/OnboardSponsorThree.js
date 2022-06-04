import { useState } from 'react';
import {
    OnboardSponsorContainer,
    TitleContainer,
    TitleDescription,
    DescriptionContainer,
    Header,
    ProgressBarContainer,
    ProgressCurrent,
    ProgressLine,
    ProgressBarCircle,
    Label,
    FormContainer,
    PageOneForm,
    FormButtonContainer,
    BackButton,
    NextButton,
    OnboardingSponsorCardContainer
} from './OnboardSponsor.styled';

import OnboardingCard from '../OnboardingCard/OnboardingCard';
import { firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard} from '../OnboardingCard/OnboardingCardData'

const OnboardSponsorThree = ({}) => {

    return (
        <OnboardSponsorContainer>
            <TitleContainer>
                <Header>
                    Sponsor
                </Header>
            </TitleContainer>
            <DescriptionContainer>
                <TitleDescription>
                    Defiact helps you close deals 87% faster
                </TitleDescription>
            </DescriptionContainer>
            <ProgressBarContainer>
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressCurrent />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <Label>What kind of deals are you looking for?</Label>
                    <OnboardingSponsorCardContainer>
                        <OnboardingCard {...firstCard}/>
                        <OnboardingCard {...secondCard}/>
                        <OnboardingCard {...thirdCard}/>
                    </OnboardingSponsorCardContainer>
                    <OnboardingSponsorCardContainer>
                        <OnboardingCard {...fourthCard}/>
                        <OnboardingCard {...fifthCard}/>
                        <OnboardingCard {...sixthCard}/>
                    </OnboardingSponsorCardContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton>Back</BackButton>
                <NextButton>Submit</NextButton>
            </FormButtonContainer>
        </OnboardSponsorContainer>
    )
}

export default OnboardSponsorThree