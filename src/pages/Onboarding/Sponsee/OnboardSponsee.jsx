import { useState } from 'react';
import { useNavigate } from'react-router-dom'
import {
    OnboardSponseeContainer,
    TitleContainer,
    TitleDescription,
    DescriptionContainer,
    Header
} from './OnboardSponsee.styled';

import OnboardSponseePageOne from './Step1/SponseePageOne';
import OnboardSponseePageTwo from './Step2/SponseePageTwo';

const Steps = {
    STEP1: 1,
    STEP2: 2
}

const OnboardSponsee = ({}) => {

    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(Steps.STEP1);
    const [formVal, setFormVal] = useState({});

    const handleValChange = (e) => {
        setFormVal({ ...formVal, [e.target.name]: e.target.value})
    }

    const getForm = () => {
        switch(currentStep) {
            case Steps.STEP1:
                return (<div>
                    <OnboardSponseePageOne values={formVal} onChange={handleValChange} Steps={Steps} setCurrentStep={setCurrentStep}/>
                </div>)
            case Steps.STEP2:
                return (<div>
                    <OnboardSponseePageTwo values={formVal} onChange={handleValChange} Steps={Steps} setCurrentStep={setCurrentStep}/>
                </div>)
            default:
                return (<div>
                    Not Found
                </div>)
        }
    }

    const onSubmit = () => {
        console.log(formVal);
        // setFirstName(firstName);
        // setLastName(lastName);
        // setEmail(email);
        // setOccupation(occupation);
        // setMobile(mobile);
        // setSport(sport);
        // var myHeaders = new Headers();
        // myHeaders.append('Content-Type', 'application/json');
        // var raw = JSON.stringify({
        // 'fields': {
        //     "firstName": `${firstName}`,
        //     "lastName": `${lastName}`,
        //     "email": `${email}`,
        //     "occupation": `${occupation}`,
        //     "mobile": `${mobile}`,
        //     "sport": `${sport}`
        // }
        // });
        // var requestOptions = {
        // method: 'POST',
        // headers: myHeaders,
        // body: raw,
        // redirect: 'follow'
        // };
        // fetch("https://us-central1-project-s-backend.cloudfunctions.net/userServiceApp/user/0xe4436bac6ac98e27156FC597607485FEfeE23f8c/profile", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
        
        // navigate('/onboarding/sponseeTwo')
    };

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
            {getForm()}
        </OnboardSponseeContainer>
    )
}

export default OnboardSponsee