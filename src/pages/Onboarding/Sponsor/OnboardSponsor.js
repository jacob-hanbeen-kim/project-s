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

const OnboardSponsor = ({}) => {

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
                <ProgressCurrent />
                <ProgressLine />
                <ProgressBarCircle />
                <ProgressLine />
                <ProgressBarCircle />
            </ProgressBarContainer>
            <FormContainer>
                <PageOneForm>
                    <label>Find your enterprise</label>
                    <EnterpriseWrapper>
                        <FormInput type="text" id="enterprise" name="enterprise" placeholder="Your enterprise" />
                        <p>or</p>

                    </EnterpriseWrapper>
                    <SponsorInfoContainer>
                        <FormInputLabel for="name">Name or Title</FormInputLabel>
                        <FormInput type="text" id="name" name="name" placeholder="Name or Title.." />
                        
                        <FormInputLabel for="location">Location</FormInputLabel>
                        <FormInput type="text" id="location" name="location" placeholder="Enterprise location.." />

                        <FormInputLabel for="industry">Industry</FormInputLabel>
                        <FormInput type="text" id="industry" name="industry" placeholder="Enterprise industry.." />

                        <FormInputLabel for="revenue">Yearly Revenue</FormInputLabel>
                        <FormInput type="number" id="revenue" name="revenue" placeholder="Enterprise revenue.." />

                        <FormInputLabel for="url">Company Website Url</FormInputLabel>
                        <FormInput type="text" id="url" name="url" placeholder="Enterprise url.." />

                        <FormInputLabel for="email">E-mail</FormInputLabel>
                        <FormInput type="number" id="email" name="email" placeholder="Enterprise email.." />
                    </SponsorInfoContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton>Back</BackButton>
                <NextButton>Next</NextButton>
            </FormButtonContainer>
        </OnboardSponsorContainer>
    )
}

export default OnboardSponsor