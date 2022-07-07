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
} from '../../Onboarding/Sponsor/OnboardSponsor.styled';

import DealsCard from '../../Onboarding/DealsCard/DealsCard';
import { equipmentEndorsementCard, mediaAdvertisementCard, socialMediaCollaborationCard, onsiteAdvertisementCard, logoOnApparelCard, othersCard} from '../../Onboarding/DealsCard/DealsCardData'

const OnboardSponsorPageThree = ({ values, handleChange, nextStep, previousStep }) => {

    const previousPage = (e) => {
        e.preventDefault();
        previousStep();
    }

    return(
        <>
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
                    <DealsCard {...equipmentEndorsementCard} onChange={handleChange('')} />
                    <DealsCard {...mediaAdvertisementCard} onChange={handleChange('')} />
                    <DealsCard {...socialMediaCollaborationCard} onChange={handleChange('')} />
                </OnboardingSponsorCardContainer>
                <OnboardingSponsorCardContainer>
                    <DealsCard {...onsiteAdvertisementCard} onChange={handleChange('')}/>
                    <DealsCard {...logoOnApparelCard} onChange={handleChange('')}/>
                    <DealsCard {...othersCard} onChange={handleChange('')}/>
                </OnboardingSponsorCardContainer>
            </PageOneForm>
        </FormContainer>
        <FormButtonContainer>
            <BackButton onClick={previousPage}>Back</BackButton>
            <NextButton>Submit</NextButton>
        </FormButtonContainer>
        </>
    )
}

export default OnboardSponsorPageThree