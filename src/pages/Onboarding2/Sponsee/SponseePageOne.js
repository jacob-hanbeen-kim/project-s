import React, { useState } from 'react'
import { useNavigate } from'react-router-dom'
import {
    ProgressBarContainer,
    ProgressCurrent,
    ProgressLine,
    ProgressBarCircle,
    CheckboxWrapper,
    FormContainer,
    PageOneForm,
    FormInputLabel,
    SponseeInfoContainer,
    RadioButtonContainer,
    RadioButtonWrapper,
    FormButtonContainer,
    PageOneFormContainer,
    BackButton,
    NextButton,
    SelectOption,
    FormInput,
} from '../../Onboarding/Sponsee/OnboardSponsee.styled';

const SponseePageOne = ({ values, handleChange, nextStep }) => {
    const navigate = useNavigate();
    const [hasAgency, setHasAgency] = useState(false);

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    }

    const agencyTrue = (e) => {
        e.preventDefault();
        setHasAgency(true);
        handleChange('agency')
    };

    const agencyFalse = (e) => {
        e.preventDefault();
        setHasAgency(false);
        handleChange('agency')
    };

    return (
        <div>
        <ProgressBarContainer>
                <ProgressCurrent />
                <ProgressLine />
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressBarCircle />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <PageOneFormContainer>
                    <label>Are you an...</label>
                    <CheckboxWrapper>
                        <SelectOption name="occupation" id="userJob" onChange={handleChange('occupation')} defaultValue={values.occupation} required>
                            <optgroup label="userJob">
                                <option>Choose Option</option>
                                <option value="Athlete">Athlete</option>
                                <option value="Sponsor">Sponsor</option>
                                <option value="Agent">Agent</option>
                            </optgroup>
                        </SelectOption>
                    </CheckboxWrapper>
                    <SponseeInfoContainer>
                        <FormInputLabel for="fname">First Name</FormInputLabel>
                        <FormInput type="text" onChange={handleChange('firstName')} id="fname" name="firstName" defaultValue={values.firstName} placeholder="Your first name.." required/>
                        
                        <FormInputLabel for="lname">Last Name</FormInputLabel>
                        <FormInput type="text" onChange={handleChange('lastName')} id="lname" name="lastName" defaultValue={values.lastName} placeholder="Your last name.." required/>

                        <FormInputLabel for="email">Email</FormInputLabel>
                        <FormInput type="email" onChange={handleChange('email')} id="email" name="email" defaultValue={values.email} placeholder="Your email.." required/>

                        <FormInputLabel for="mobile">Phone Number</FormInputLabel>
                        <FormInput type="text" onChange={handleChange('mobile')} id="mobile" name="mobile" defaultValue={values.mobile} placeholder="Your number.." required/>
                    </SponseeInfoContainer>

                    <label>What sport do you play?</label>
                    <CheckboxWrapper>
                        <SelectOption name="sport" id="sport" onChange={handleChange('sport')} required>
                            <optgroup label="sport">
                                <option>Choose Option</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Soccer">Soccer</option>
                                <option value="Baseball">Baseball</option>
                            </optgroup>
                        </SelectOption>
                    </CheckboxWrapper>

                    <label>Do you have an existing agency representing your brand?</label>
                    <RadioButtonContainer>
                        <RadioButtonWrapper>
                            <input type="radio" value={hasAgency} checked={hasAgency} onChange={agencyTrue} id="YesAgency" name="YesAgency"/>
                            <label for="YesAgency">Yes</label><br />
                        </RadioButtonWrapper>
                        <RadioButtonWrapper>
                            <input type="radio" value={!hasAgency} checked={!hasAgency} onChange={agencyFalse} id="NoAgency" name="NoAgency"/>
                            <label for="NoAgency">No</label><br />
                        </RadioButtonWrapper>
                    </RadioButtonContainer>
                    </PageOneFormContainer>
                    <FormButtonContainer>
                        <BackButton onClick={() => navigate('/onboarding')}>Back</BackButton>
                        <NextButton onClick={nextPage}>Next</NextButton>
                    </FormButtonContainer>
                </PageOneForm>
            </FormContainer>
        </div>
    )
}

export default SponseePageOne