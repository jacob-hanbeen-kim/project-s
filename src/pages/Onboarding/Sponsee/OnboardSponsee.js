import { useState } from 'react';
import { useNavigate } from'react-router-dom'
import {
    OnboardSponseeContainer,
    TitleContainer,
    TitleDescription,
    ProgressBarContainer,
    ProgressCurrent,
    ProgressLine,
    ProgressBarCircle,
    DescriptionContainer,
    Header,
    CheckboxWrapper,
    FormContainer,
    PageOneForm,
    FormInputLabel,
    SponseeInfoContainer,
    RadioButtonContainer,
    RadioButtonWrapper,
    SelectOption,
    FormInput,
    FormButtonContainer,
    BackButton,
    NextButton,
} from './OnboardSponsee.styled';

const OnboardSponsee = ({}) => {

    const navigate = useNavigate();
    const navigateTo = () => navigate('/onboarding/sponseeTwo');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [occupation, setOccupation] = useState('');
    const [sport, setSport] = useState('');

    const [checked, setChecked] = useState({ yes: false, no: false});

    const agencyTrue = (e) => {
        e.preventDefault();
        setChecked({yes: true, no:false})
    };

    const agencyFalse = (e) => {
        e.preventDefault();
        setChecked({yes: false, no: true})
    };

    const onNext = (e) => {
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setOccupation(occupation)
        setMobile(mobile)
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        var raw = JSON.stringify({
        'fields': {
            "firstName": `${firstName}`,
            "lastName": `${lastName}`,
            "occupation": `${occupation}`
        }
        });
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        fetch("https://us-central1-project-s-backend.cloudfunctions.net/userServiceApp/user/0xe4436bac6ac98e27156FC597607485FEfeE23f8c/profile", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
        navigateTo()
    };

    const handleChangeOccupation = (event) => {
        setOccupation(event.target.value);
    }

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangeMobile = (event) => {
        setMobile(event.target.value);
    }

    const handleChangeSport = (event) => {
        setSport(event.target.value);
    }

    const handleChangeAgency= (event) => {
        setChecked(event.target.value);
    }

    return (
        <OnboardSponseeContainer>
            <TitleContainer>
                <Header>
                    Sponsee
                </Header>
            </TitleContainer>
            <DescriptionContainer>
                <TitleDescription>
                    Find potential sponsors and create more opportunities
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
                    <label>Are you an...</label>
                    <CheckboxWrapper>
                        <SelectOption value={occupation} name="userJob" id="userJob" onChange={event => handleChangeOccupation(event)}>
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
                        <FormInput type="text" value={firstName} onChange={event => handleChangeFirstName(event)} id="fname" name="firstname" placeholder="Your first name.." />
                        
                        <FormInputLabel for="lname">Last Name</FormInputLabel>
                        <FormInput type="text" value={lastName} onChange={event => handleChangeLastName(event)} id="lname" name="lastname" placeholder="Your last name.." />

                        <FormInputLabel for="email">Email</FormInputLabel>
                        <FormInput type="text" value={email} onChange={event => handleChangeEmail(event)} id="email" name="email" placeholder="Your email.." />

                        <FormInputLabel for="phone">Phone Number</FormInputLabel>
                        <FormInput type="text" value={mobile} onChange={event => handleChangeMobile(event)} id="phone" name="phone" placeholder="Your number.." />
                    </SponseeInfoContainer>

                    <label>What sport do you play?</label>
                    <CheckboxWrapper>
                        <SelectOption value={sport} name="sport" id="sport" onChange={event => handleChangeSport(event)}>
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
                            <input type="radio" value={checked.yes} checked={checked.yes} onChange={event => handleChangeAgency(event)} id="YesAgency" name="YesAgency" value="YesAgency" onChange={agencyTrue} />
                            <label for="YesAgency">Yes</label><br />
                        </RadioButtonWrapper>
                        <RadioButtonWrapper>
                            <input type="radio" value={checked.no} checked={checked.no} onChange={event => handleChangeAgency(event)} id="NoAgency" name="NoAgency" value="NoAgency" onChange={agencyFalse}/>
                            <label for="NoAgency">No</label><br />
                        </RadioButtonWrapper>
                    </RadioButtonContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton>Back</BackButton>
                <NextButton onClick={onNext}>Next</NextButton>
            </FormButtonContainer>
        </OnboardSponseeContainer>
    )
}

export default OnboardSponsee