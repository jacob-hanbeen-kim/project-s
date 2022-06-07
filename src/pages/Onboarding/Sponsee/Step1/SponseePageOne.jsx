import { useState } from 'react';
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
} from '../OnboardSponsee.styled';

const OnboardSponseePageOne = ({ values, onChange, Steps, setCurrentStep }) => {
    const navigate = useNavigate();
    const [hasAgency, setHasAgency] = useState(false);

    const agencyTrue = (e) => {
        e.preventDefault();
        setHasAgency(true)
        onChange({
            target: {
                name: 'hasAgency',
                value: true
            }
        })
    };

    const agencyFalse = (e) => {
        e.preventDefault();
        setHasAgency(false)
        onChange({
            target: {
                name: 'hasAgency',
                value: false
            }
        })
    };

    const handleSubmit = (e) => {
        // console.log(values);
        setCurrentStep(Steps.STEP2);
    }

    return(
        <div>
            <ProgressBarContainer>
                    <ProgressBarCircle />
                    <ProgressLine />
                    <ProgressCurrent />
                    <ProgressLine />
                    <ProgressBarCircle />
                </ProgressBarContainer>
                <FormContainer>
                    <PageOneForm>
                        <PageOneFormContainer>
                        <label>Are you an...</label>
                        <CheckboxWrapper>
                            <SelectOption value={values.occupation} name="occupation" id="userJob" onChange={onChange} required>
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
                            <FormInput type="text" value={values.firstName} onChange={onChange} id="fname" name="firstName" placeholder="Your first name.." required/>
                            
                            <FormInputLabel for="lname">Last Name</FormInputLabel>
                            <FormInput type="text" value={values.lastName} onChange={onChange} id="lname" name="lastName" placeholder="Your last name.." required/>

                            <FormInputLabel for="email">Email</FormInputLabel>
                            <FormInput type="email" value={values.email} onChange={onChange} id="email" name="email" placeholder="Your email.." required/>

                            <FormInputLabel for="phone">Phone Number</FormInputLabel>
                            <FormInput type="text" value={values.phone} onChange={onChange} id="phone" name="phone" placeholder="Your number.." required/>
                        </SponseeInfoContainer>

                        <label>What sport do you play?</label>
                        <CheckboxWrapper>
                            <SelectOption value={values.sport} name="sport" id="sport" onChange={onChange} required>
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
                            <NextButton onClick={handleSubmit}>Next</NextButton>
                        </FormButtonContainer>
                    </PageOneForm>
                </FormContainer>
            </div>
    )
}

export default OnboardSponseePageOne