import { useState } from 'react';
import {
    OnboardAgencyContainer,
    TitleContainer,
    TitleDescription,
    DescriptionContainer,
    Header,
    ProgressBarContainer,
    ProgressCurrent,
    ProgressLine,
    ProgressBarCircle,
    FormContainer,
    PageOneForm,
    Label,
    FormButtonContainer,
    RadioButtonContainer,
    RadioButtonWrapper,
    RadioLabel,
    BackButton,
    NextButton,
    OnboardingAgencyCardContainer
} from '../../Onboarding/Agent/OnboardAgency.styled';

import DealsCard from '../../Onboarding/DealsCard/DealsCard';
import { equipmentEndorsementCard, mediaAdvertisementCard, socialMediaCollaborationCard, onsiteAdvertisementCard, logoOnApparelCard, othersCard} from '../../Onboarding/DealsCard/DealsCardData'

const AgencyPageTwo = ({ values, handleChange, nextStep, previousStep }) => {

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    }

    const previousPage = (e) => {
        e.preventDefault();
        previousStep();
    }

    return (
        <>
            <ProgressBarContainer>
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressCurrent />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <Label>What kind of deals are you looking for?</Label>
                    <OnboardingAgencyCardContainer>
                        <DealsCard {...equipmentEndorsementCard} onChange={handleChange('')}/>
                        <DealsCard {...mediaAdvertisementCard} onChange={handleChange('')}/>
                        <DealsCard {...socialMediaCollaborationCard} onChange={handleChange('')}/>
                    </OnboardingAgencyCardContainer>
                    <OnboardingAgencyCardContainer>
                        <DealsCard {...onsiteAdvertisementCard} onChange={handleChange('')}/>
                        <DealsCard {...logoOnApparelCard} onChange={handleChange('')}/>
                        <DealsCard {...othersCard} onChange={handleChange('')}/>
                    </OnboardingAgencyCardContainer>
                    <Label>What is your pay based on?</Label>
                    <RadioButtonContainer>
                        <RadioButtonWrapper>
                            <input type="radio" id="commission" name="commission" value="commission" />
                            <RadioLabel for="commission">Commission</RadioLabel><br />
                        </RadioButtonWrapper>
                        <RadioButtonWrapper>
                            <input type="radio" id="flat_rate" name="flat_rate" value="flat_rate"/>
                            <RadioLabel for="flat_rate">Flat Rate</RadioLabel><br />
                        </RadioButtonWrapper>
                    </RadioButtonContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton onClick={previousPage}>Back</BackButton>
                <NextButton onClick={nextPage}>Submit</NextButton>
            </FormButtonContainer>
        </>
    )
}

export default AgencyPageTwo