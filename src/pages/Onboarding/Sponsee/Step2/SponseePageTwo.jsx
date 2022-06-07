import {
    ProgressBarContainer,
    ProgressCurrent,
    ProgressBarCircle,
    ProgressLine,
    CheckboxWrapper,
    SelectWrapper,
    FormContainer,
    PageOneForm,
    AmountContainer,
    PageOneFormContainer,
    FormButtonContainer,
    BackButton,
    NextButton,
    FormInputLabel,
    FormInput,
    OnboardingSponsorCardWrapper
} from '../OnboardSponsee.styled';

import DealsCard from '../../DealsCard/DealsCard';
import { firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard} from '../../DealsCard/DealsCardData'

const OnboardSponseePageTwo = ({ values, onChange, Steps, setCurrentStep }) => {

    const onBack = (e) => {
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
                            <SelectWrapper value={values.league} onChange={onChange} name="league" id="league">
                                <optgroup label="league">
                                    <option>Choose Option</option>
                                    <option value="NCAA">NCAA</option>
                                    <option value="EPL">EPL</option>
                                    <option value="LCK">LCK</option>
                                </optgroup>
                            </SelectWrapper>
                        </CheckboxWrapper>
                        <OnboardingSponsorCardWrapper>
                            <DealsCard {...firstCard} value={values.deals} onChange={onChange} name="equipment_endorsement"/>
                            <DealsCard {...secondCard} value={values.deals} onChange={onChange} name="media_advertisement"/>
                            <DealsCard {...thirdCard} value={values.deals} onChange={onChange} name="social_media_collaboration"/>
                        </OnboardingSponsorCardWrapper>
                        <OnboardingSponsorCardWrapper>
                            <DealsCard {...fourthCard} value={values.deals} onChange={onChange} name="onsite_advertisement"/>
                            <DealsCard {...fifthCard} value={values.deals} onChange={onChange} name="logo_on_apparel"/>
                            <DealsCard {...sixthCard} value={values.deals} onChange={onChange} name="others"/>
                        </OnboardingSponsorCardWrapper>
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