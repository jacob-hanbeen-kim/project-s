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
import { firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard} from '../../DealsCard/DealsCardData'

const OnboardSponsorPageThree = ({}) => {

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
                    <DealsCard {...firstCard}/>
                    <DealsCard {...secondCard}/>
                    <DealsCard {...thirdCard}/>
                </OnboardingSponsorCardContainer>
                <OnboardingSponsorCardContainer>
                    <DealsCard {...fourthCard}/>
                    <DealsCard {...fifthCard}/>
                    <DealsCard {...sixthCard}/>
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