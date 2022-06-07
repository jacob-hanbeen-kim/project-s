import { useState } from 'react';
import { useNavigate } from'react-router-dom'
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
    EnterpriseWrapper,
    FormContainer,
    PageOneForm,
    FormInputLabel,
    SponsorInfoContainer,
    FormInput,
    FormButtonContainer,
    BackButton,
    NextButton,
} from './OnboardSponsor.styled';

import OnboardSponsorPageOne from './Step1/SponsorPageOne';
import OnboardSponsorPageTwo from './Step2/SponsorPageTwo';
import OnboardSponsorPageThree from './Step3/SponsorPageThree';

const Steps = {
    STEP1: 1,
    STEP2: 2,
    STEP3: 3
}

const OnboardSponsor = ({}) => {

    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(Steps.STEP1);
    const [formVal, setFormVal] = useState({});

    const handleValChange = (e) => {
        setFormVal({ ...formVal, [e.target.name]: e.target.value})
    }

    const [checked, setChecked] = useState({ yes: false, no: false});

    const getForm = () => {
        switch(currentStep) {
            case Steps.STEP1:
                return (<div>
                    <OnboardSponsorPageOne values={formVal} onChange={handleValChange} Steps={Steps} setCurrentStep={setCurrentStep}/>
                </div>)
            case Steps.STEP2:
                return (<div>
                    <OnboardSponsorPageTwo values={formVal} onChange={handleValChange} Steps={Steps} setCurrentStep={setCurrentStep}/>
                </div>)
            case Steps.STEP3:
                return (<div>
                    <OnboardSponsorPageThree values={formVal} onChange={handleValChange} Steps={Steps} setCurrentStep={setCurrentStep}/>
                </div>)
            default:
                return (<div>
                    Not Found
                </div>)
        }
    }

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
            {getForm()}
        </OnboardSponsorContainer>
    )
}

export default OnboardSponsor