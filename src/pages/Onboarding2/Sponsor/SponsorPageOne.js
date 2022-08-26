import { useNavigate } from'react-router-dom'
import {
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
} from '../../Onboarding/Sponsor/OnboardSponsor.styled';

const SponsorPageOne = ({ values, handleChange, nextStep }) => {

    const navigate = useNavigate();

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    }

    return(
        <>
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
                        <FormInput type="text" onChange={handleChange('enterprise')} id="enterprise" name="enterprise" placeholder="Your enterprise" />
                        <p>or</p>

                    </EnterpriseWrapper>
                    <SponsorInfoContainer>
                        <FormInputLabel for="name">Name or Title</FormInputLabel>
                        <FormInput type="text" onChange={handleChange('name')} id="name" name="name" placeholder="Name or Title.." />
                        
                        <FormInputLabel for="location">Location</FormInputLabel>
                        <FormInput type="text" onChange={handleChange('location')} id="location" name="location" placeholder="Enterprise location.." />

                        <FormInputLabel for="industry">Industry</FormInputLabel>
                        <FormInput type="text" onChange={handleChange('industry')}  id="industry" name="industry" placeholder="Enterprise industry.." />

                        <FormInputLabel for="revenue">Yearly Revenue</FormInputLabel>
                        <FormInput type="number" onChange={handleChange('revenue')} id="revenue" name="revenue" placeholder="Enterprise revenue.." />

                        <FormInputLabel for="website">Company Website Url</FormInputLabel>
                        <FormInput type="text" onChange={handleChange('website')}  id="website" name="website" placeholder="Enterprise website.." />

                        <FormInputLabel for="email">E-mail</FormInputLabel>
                        <FormInput type="number" onChange={handleChange('email')} id="email" name="email" placeholder="Enterprise email.." />
                    </SponsorInfoContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton onClick={() => navigate('/onboarding')}>Back</BackButton>
                <NextButton onClick={nextPage}>Next</NextButton>
            </FormButtonContainer>
            </>
    )

}

export default SponsorPageOne