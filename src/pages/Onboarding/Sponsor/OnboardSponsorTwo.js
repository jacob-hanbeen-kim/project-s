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
    EnterpriseWrapper,
    SportsContainer,
    SportsWrapper,
    FormContainer,
    AddSportButton,
    PageOneForm,
    CheckboxWrapper,
    FormInput,
    FormButtonContainer,
    BackButton,
    NextButton,
} from './OnboardSponsor.styled';

const OnboardSponsorTwo = ({}) => {

    const [checked, setChecked] = useState({ yes: false, no: false});


    return (
        <OnboardSponsorContainer>
            <TitleContainer>
                <Header>
                    Sponsor
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
                <ProgressLine />
                <ProgressBarCircle />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <Label>What is your budget?</Label>
                    <EnterpriseWrapper>
                        <FormInput type="number" id="budget" name="budget" placeholder="Your budget.." />
                    </EnterpriseWrapper>
                    <Label>When do you want to sponsor?</Label>
                    <CheckboxWrapper>
                        <select name="time_period" id="time_period">
                            <optgroup label="time_period">
                                <option>Choose Option</option>
                                <option value="one_month">1 month</option>
                                <option value="three_months">3 months</option>
                                <option value="six_months">6 months</option>
                                <option value="one_year">1 Year</option>
                                <option value="more_than_year">More than a year</option>
                            </optgroup>
                        </select>
                    </CheckboxWrapper>
                    <SportsContainer>
                        <Label>What are your sports of interest?</Label>
                        <SportsWrapper>
                            <FormInput type="text" id="sports" name="sports" placeholder="sport of interest.." />
                            <AddSportButton> + </AddSportButton>
                        </SportsWrapper>
                    </SportsContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton>Back</BackButton>
                <NextButton>Next</NextButton>
            </FormButtonContainer>
        </OnboardSponsorContainer>
    )
}

export default OnboardSponsorTwo