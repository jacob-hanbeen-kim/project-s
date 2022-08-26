import React, { useState } from 'react'
import axios from 'axios';
import {
    ProgressBarContainer,
    ProgressCurrent,
    ProgressBarCircle,
    ProgressLine,
    CheckboxWrapper,
    FormContainer,
    PageOneForm,
    AmountContainer,
    SelectOption,
    PageOneFormContainer,
    FormButtonContainer,
    BackButton,
    NextButton,
    FormInputLabel,
    FormInput,
    OnboardingDealsCardWrapper,
    OnboardingSponsorCardContainer
} from '../../Onboarding/Sponsee/OnboardSponsee.styled';

import { useAuth } from '../../../contexts/AuthContext';

import DealsCard from '../../Onboarding/DealsCard/DealsCard';
import { equipmentEndorsementCard, mediaAdvertisementCard, socialMediaCollaborationCard, onsiteAdvertisementCard, logoOnApparelCard, othersCard} from '../../Onboarding/DealsCard/DealsCardData'

const SponseePageTwo = ({ values, handleChange, states, previousStep}) => {

    const { currentUser } = useAuth();

    const previousPage = (e) => {
        e.preventDefault();
        previousStep();
    }

    const handleSubmit = async (e) => {
        const response = await axios.post(`https://us-central1-project-s-backend.cloudfunctions.net/dbServiceApp/profile/sponsee/${currentUser.id}`, 
        { body : states}, 
        { headers: {
            'Content-Type': 'application/json'
                }
            }
        )
        console.log(response)
        e.preventDefault();
    }

    return(
        <div>
            <ProgressBarContainer>
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressCurrent />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <PageOneFormContainer>
                        <label>What is your association? Which league do you play in?</label>
                        <CheckboxWrapper>
                            <SelectOption onChange={handleChange('association')} name="league" id="league">
                                <optgroup label="league">
                                    <option>Choose Option</option>
                                    <option value="NCAA">NCAA</option>
                                    <option value="EPL">EPL</option>
                                    <option value="LCK">LCK</option>
                                </optgroup>
                            </SelectOption>
                        </CheckboxWrapper>
                        <OnboardingDealsCardWrapper>
                            <OnboardingSponsorCardContainer>
                                <DealsCard {...equipmentEndorsementCard} onChange={handleChange()}/>
                                <DealsCard {...mediaAdvertisementCard} onChange={handleChange()} />
                                <DealsCard {...socialMediaCollaborationCard} onChange={handleChange()}/>
                            </OnboardingSponsorCardContainer>
                            <OnboardingSponsorCardContainer>
                                <DealsCard {...onsiteAdvertisementCard} onChange={handleChange()}/>
                                <DealsCard {...logoOnApparelCard} onChange={handleChange()}/>
                                <DealsCard {...othersCard} onChange={handleChange()}/>
                            </OnboardingSponsorCardContainer>
                        </OnboardingDealsCardWrapper>
                        <AmountContainer>
                            <FormInputLabel for="amount">Estimated Sponsorship Amount (optional)</FormInputLabel>
                            <FormInput type="number" name="amount" placeholder="Enter amount" onChange={handleChange('amount')}/>
                        </AmountContainer>
                    </PageOneFormContainer>
                    <FormButtonContainer>
                        <BackButton onClick={previousPage}>Back</BackButton>
                        <NextButton onSubmit={handleSubmit}>Next</NextButton>
                    </FormButtonContainer>
                </PageOneForm>
            </FormContainer>
        </div>
    )
}

export default SponseePageTwo