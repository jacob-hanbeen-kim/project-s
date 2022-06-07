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

import OnboardAgencyPageOne from './Step1/AgencyPageOne';
import OnboardAgencyPageTwo from './Step2/AgencyPageTwo';

const Steps = {
    STEP1: 1,
    STEP2: 2
}

const OnboardAgency = ({}) => {

    const [currentStep, setCurrentStep] = useState(Steps.STEP1);
    const [formVal, setFormVal] = useState({});

    const handleValChange = (e) => {
        setFormVal({ ...formVal, [e.target.name]: e.target.value})
    }

    const getForm = () => {
        switch(currentStep) {
            case Steps.STEP1:
                return (<div>
                    <OnboardAgencyPageOne values={formVal} onChange={handleValChange} Steps={Steps} setCurrentStep={setCurrentStep}/>
                </div>)
            case Steps.STEP2:
                return (<div>
                    <OnboardAgencyPageTwo values={formVal} onChange={handleValChange} Steps={Steps} setCurrentStep={setCurrentStep}/>
                </div>)
            default:
                return (<div>
                    Not Found
                </div>)
        }
    }

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
            {getForm()}
        </OnboardAgencyContainer>
    )
}

export default OnboardAgency