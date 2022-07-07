import React, { useState } from 'react';
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
} from '../OnboardSponsee.styled';

import DealsCard from '../../DealsCard/DealsCard';
import { equipmentEndorsementCard, mediaAdvertisementCard, socialMediaCollaborationCard, onsiteAdvertisementCard, logoOnApparelCard, othersCard} from '../../DealsCard/DealsCardData'

const OnboardSponseePageTwo = ({ values, onClick, onChange, Steps, setCurrentStep }) => {

    const [deals, setDeals] = useState({
        equipmentEndorsement: false,
        mediaAdvertisement: false,
        socialMediaCollaboration: false,
        onsiteAdvertisement: false,
        logoOnApparel: false,
        others: false,
        });
    const [active, setActive] = useState(false);
    const [equipmentEndorsement, setEquipmentEndorsement] = useState(false);
    const [mediaAdvertisement, setMediaAdvertisement] = useState(false);
    const [socialMediaCollaboration, setSocialMediaCollaboration] = useState(false);
    const [onsiteAdvertisement, setOnsiteAdvertisement] = useState(false);
    const [logoOnApparel, setLogoOnApparel] = useState(false);
    const [others, setOthers] = useState(false);

    const handleDeals = (e) => {
        if(equipmentEndorsement == false) {
            setActive(true);
            onChange({
                target: {
                    name: 'equipmentEndorsement',
                    value: true
                }
            })
        } else {
            setEquipmentEndorsement(false);
            setActive(false);
            onChange({
                target: {
                    name: 'equipmentEndorsement',
                    value: false
                }
            })
        }
    }

    const onHandleDeals = (e) => {
        e.preventDefault();
        setDeals(e.target.name);
    }

    const onDeals = (e) => {
        e.preventDefault();
        setDeals(true)
        console.log(values)
    }

    const onBack = (e) => {
        setCurrentStep(Steps.STEP1);
        console.log(values)
    }

    const handleSubmit = (e) => {
        console.log(values)
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
                            <SelectOption value={values.league} onChange={onChange} name="league" id="league">
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
                                <DealsCard {...equipmentEndorsementCard} value={values.deals} name='equipmentEndorsement' onChange={handleDeals}/>
                                <DealsCard {...mediaAdvertisementCard} value={values.deals} onChange={handleDeals} />
                                <DealsCard {...socialMediaCollaborationCard} value={values.deals} onChange={handleDeals}/>
                            </OnboardingSponsorCardContainer>
                            <OnboardingSponsorCardContainer>
                                <DealsCard {...onsiteAdvertisementCard} value={values.deals} onChange={handleDeals}/>
                                <DealsCard {...logoOnApparelCard} value={values.deals} onChange={handleDeals}/>
                                <DealsCard {...othersCard} value={values.deals} onChange={handleDeals}/>
                            </OnboardingSponsorCardContainer>
                        </OnboardingDealsCardWrapper>
                        <AmountContainer>
                            <FormInputLabel for="amount">Estimated Sponsorship Amount (optional)</FormInputLabel>
                            <FormInput type="number" value={values.amount} name="amount" placeholder="Enter amount" onChange={onChange}/>
                        </AmountContainer>
                    </PageOneFormContainer>
                    <FormButtonContainer>
                        <BackButton onClick={onBack}>Back</BackButton>
                        <NextButton type='submit' onSubmit={handleSubmit}>Submit</NextButton>
                    </FormButtonContainer>
                </PageOneForm>
            </FormContainer>
        </div>
    )
}

export default OnboardSponseePageTwo