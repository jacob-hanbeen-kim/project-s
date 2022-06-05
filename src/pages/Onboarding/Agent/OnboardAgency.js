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
} from './OnboardAgency.styled';



const OnboardAgency = ({}) => {

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
                <ProgressCurrent />
                <ProgressLine />
                <ProgressBarCircle />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <Label>Agency Name</Label>
                    <AgencyInfoContainer>
                        <FormInput type="text" id="name" name="name" placeholder="Your agency name.." />
                    </AgencyInfoContainer>

                    <Label>Who are your main clients?</Label>
                    <CheckboxWrapper>
                        <SelectOption name="clients" id="clients">
                            <optgroup label="clients">
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
                <BackButton>Back</BackButton>
                <NextButton>Next</NextButton>
            </FormButtonContainer>
        </OnboardAgencyContainer>
    )
}

export default OnboardAgency