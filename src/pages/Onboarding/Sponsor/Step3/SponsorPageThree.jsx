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
} from '../OnboardSponsor.styled';

import DealsCard from '../../DealsCard/DealsCard';
import { equipmentEndorsementCard, mediaAdvertisementCard, socialMediaCollaborationCard, onsiteAdvertisementCard, logoOnApparelCard, othersCard} from '../../DealsCard/DealsCardData'

const OnboardSponsorPageThree = ({ values, onChange, Steps, setCurrentStep }) => {

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
                    <DealsCard {...equipmentEndorsementCard} value={values} onChange={onChange} name=""/>
                    <DealsCard {...mediaAdvertisementCard} value={values.deals.media} onChange={onChange} name=""/>
                    <DealsCard {...socialMediaCollaborationCard} value={values.deals.social} onChange={onChange} name=""/>
                </OnboardingSponsorCardContainer>
                <OnboardingSponsorCardContainer>
                    <DealsCard {...onsiteAdvertisementCard} value={values.deals} onChange={onChange} name=""/>
                    <DealsCard {...logoOnApparelCard} value={values.deals} onChange={onChange} name=""/>
                    <DealsCard {...othersCard} value={values.deals} onChange={onChange} name=""/>
                </OnboardingSponsorCardContainer>
            </PageOneForm>
        </FormContainer>
        <FormButtonContainer>
            <BackButton>Back</BackButton>
            <NextButton>Submit</NextButton>
        </FormButtonContainer>
        </>
    )
}

export default OnboardSponsorPageThree