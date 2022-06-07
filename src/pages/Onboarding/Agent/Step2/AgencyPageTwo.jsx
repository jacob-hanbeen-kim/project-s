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
} from '../OnboardAgency.styled';

import DealsCard from '../../DealsCard/DealsCard';
import { firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard} from '../../DealsCard/DealsCardData'

const OnboardAgencyPageTwo = ({ values, onChange, Steps, setCurrentStep }) => {

    const [checked, setChecked] = useState({ yes: false, no: false});

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
                        <DealsCard {...firstCard}/>
                        <DealsCard {...secondCard}/>
                        <DealsCard {...thirdCard}/>
                    </OnboardingAgencyCardContainer>
                    <OnboardingAgencyCardContainer>
                        <DealsCard {...fourthCard}/>
                        <DealsCard {...fifthCard}/>
                        <DealsCard {...sixthCard}/>
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
                <BackButton onClick={() => setCurrentStep(Steps.STEP1)}>Back</BackButton>
                <NextButton>Submit</NextButton>
            </FormButtonContainer>
        </>
    )
}

export default OnboardAgencyPageTwo