import { useState } from 'react';
import { useNavigate } from'react-router-dom'
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
    CheckboxWrapper,
    FormContainer,
    PageOneForm,
    SelectOption,
    SendEmailContainer,
    SendEmailWrapper,
    SendEmailButton,
    Label,
    AgencyInfoContainer,
    FormInput,
    FormButtonContainer,
    BackButton,
    NextButton,
} from '../../Onboarding/Agent/OnboardAgency.styled';



const AgencyPageOne = ({ values, handleChange, nextStep }) => {

    const navigate = useNavigate();
    const [checked, setChecked] = useState({ yes: false, no: false});

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <>
            <ProgressBarContainer>
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressCurrent />
                <ProgressLine />
                <ProgressBarCircle />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <Label>Agency Name</Label>
                    <AgencyInfoContainer>
                        <FormInput type="text" id="name" name="name" onChange={handleChange('name')} placeholder="Your agency name.." />
                    </AgencyInfoContainer>

                    <Label>Who are your main clients?</Label>
                    <CheckboxWrapper>
                        <SelectOption onChange={handleChange('client')} name="client" id="client">
                            <optgroup label="client">
                                <option>Choose Option</option>
                                <option value="Sports_Brand">Sports Brand</option>
                                <option value="Sponsor">Soccer</option>
                                <option value="Agent">Baseball</option>
                            </optgroup>
                        </SelectOption>
                    </CheckboxWrapper>     
                    <SendEmailContainer>
                        <Label>Invite your client to join Defiact</Label>
                        <SendEmailWrapper>
                            <FormInput type="text" id="client_email" name="client_email" placeholder="enter client email.." />
                            <SendEmailButton> Send </SendEmailButton>
                        </SendEmailWrapper>
                    </SendEmailContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton onClick={() => navigate('/onboarding')}>Back</BackButton>
                <NextButton onClick={nextPage}>Next</NextButton>
            </FormButtonContainer>
        </>
    )
}

export default AgencyPageOne