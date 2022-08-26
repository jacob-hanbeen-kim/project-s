import {
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
} from '../../Onboarding/Sponsor/OnboardSponsor.styled';

const SponsorPageTwo = ({ values, handleChange, nextStep, previousStep }) => {

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    }

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
                <ProgressCurrent />
                <ProgressLine />
                <ProgressBarCircle />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <Label>What is your budget?</Label>
                    <EnterpriseWrapper>
                        <FormInput type="number" onChange={handleChange('budget')} id="budget" name="budget" placeholder="Your budget.." />
                    </EnterpriseWrapper>
                    <Label>When do you want to sponsor?</Label>
                    <CheckboxWrapper>
                        <select onChange={handleChange('time_period')} name="time_period" id="time_period">
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
                            <FormInput type="text" onChange={handleChange('interest')} id="interest" name="interest" placeholder="sport of interest.." />
                            <AddSportButton> + </AddSportButton>
                        </SportsWrapper>
                    </SportsContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton onClick={previousPage}>Back</BackButton>
                <NextButton onClick={nextPage}>Next</NextButton>
            </FormButtonContainer>
            </>
    )
}

export default SponsorPageTwo