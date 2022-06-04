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
} from './OnboardAgency.styled';

import OnboardingCard from '../OnboardingCard/OnboardingCard';
import { firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard} from '../OnboardingCard/OnboardingCardData'

const OnboardAgencyTwo = ({}) => {

    const [checked, setChecked] = useState({ yes: false, no: false});


    return (
        <OnboardAgencyContainer>
            <TitleContainer>
                <Header>
                    Agency
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
                <ProgressCurrent />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <Label>What kind of deals are you looking for?</Label>
                    <OnboardingAgencyCardContainer>
                        <OnboardingCard {...firstCard}/>
                        <OnboardingCard {...secondCard}/>
                        <OnboardingCard {...thirdCard}/>
                    </OnboardingAgencyCardContainer>
                    <OnboardingAgencyCardContainer>
                        <OnboardingCard {...fourthCard}/>
                        <OnboardingCard {...fifthCard}/>
                        <OnboardingCard {...sixthCard}/>
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
                <BackButton>Back</BackButton>
                <NextButton>Submit</NextButton>
            </FormButtonContainer>
        </OnboardAgencyContainer>
    )
}

export default OnboardAgencyTwo