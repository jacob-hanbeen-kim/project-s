import { useState } from 'react';
import {
    OnboardSponseeContainer,
    TitleContainer,
    TitleDescription,
    DescriptionContainer,
    Header,
    CheckboxWrapper,
    SelectWrapper,
    FormContainer,
    PageOneForm,
    FormInputLabel,
    SponseeInfoContainer,
    RadioButtonContainer,
    RadioButtonWrapper,
    FormInput,
    FormButtonContainer,
    BackButton,
    NextButton,
    OnboardingSponsorCardContainer
} from './OnboardSponsee.styled';

import SponsorOnboardingCard from './SponsorOnboardingCard';
import { firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard} from './SponsorOnboardingCardData'

const OnboardSponseeTwo = ({}) => {

    return (
        <OnboardSponseeContainer>
            <TitleContainer>
                <Header>
                    Sponsee
                </Header>
            </TitleContainer>
            <DescriptionContainer>
                <TitleDescription>
                    Compare contracts and know your value
                </TitleDescription>
            </DescriptionContainer>
            <FormContainer>
                <PageOneForm>
                    <label>What is your association? Which league do you play in?</label>
                    <CheckboxWrapper>
                        <SelectWrapper name="league" id="league">
                            <optgroup label="league">
                                <option>Choose Option</option>
                                <option value="NCAA">NCAA</option>
                                <option value="EPL">EPL</option>
                                <option value="LCK">LCK</option>
                            </optgroup>
                        </SelectWrapper>
                    </CheckboxWrapper>
                    <OnboardingSponsorCardContainer>
                        <SponsorOnboardingCard {...firstCard}/>
                        <SponsorOnboardingCard {...secondCard}/>
                        <SponsorOnboardingCard {...thirdCard}/>
                    </OnboardingSponsorCardContainer>
                    <OnboardingSponsorCardContainer>
                        <SponsorOnboardingCard {...fourthCard}/>
                        <SponsorOnboardingCard {...fifthCard}/>
                        <SponsorOnboardingCard {...sixthCard}/>
                    </OnboardingSponsorCardContainer>
                    

                    <FormInputLabel for="fname">Estimated Sponsorship Amount (optional)</FormInputLabel>
                    <FormInput type="number" id="amount" name="amount" placeholder="Enter amount" />
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton>Back</BackButton>
                <NextButton>Submit</NextButton>
            </FormButtonContainer>
        </OnboardSponseeContainer>
    )
}

export default OnboardSponseeTwo