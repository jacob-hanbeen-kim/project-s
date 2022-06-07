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
} from '../OnboardSponsor.styled';

const OnboardSponsorPageOne = ({ values, onChange, Steps, setCurrentStep }) => {

    const navigate = useNavigate();

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
                        <FormInput type="text" value={values.enterprice} onChange={onChange} id="enterprise" name="enterprise" placeholder="Your enterprise" />
                        <p>or</p>

                    </EnterpriseWrapper>
                    <SponsorInfoContainer>
                        <FormInputLabel for="name">Name or Title</FormInputLabel>
                        <FormInput type="text" value={values.name} onChange={onChange} id="name" name="name" placeholder="Name or Title.." />
                        
                        <FormInputLabel for="location">Location</FormInputLabel>
                        <FormInput type="text" value={values.location} onChange={onChange} id="location" name="location" placeholder="Enterprise location.." />

                        <FormInputLabel for="industry">Industry</FormInputLabel>
                        <FormInput type="text" value={values.industry} onChange={onChange}  id="industry" name="industry" placeholder="Enterprise industry.." />

                        <FormInputLabel for="revenue">Yearly Revenue</FormInputLabel>
                        <FormInput type="number" value={values.revenue} onChange={onChange} id="revenue" name="revenue" placeholder="Enterprise revenue.." />

                        <FormInputLabel for="url">Company Website Url</FormInputLabel>
                        <FormInput type="text" value={values.url} onChange={onChange}  id="url" name="url" placeholder="Enterprise url.." />

                        <FormInputLabel for="email">E-mail</FormInputLabel>
                        <FormInput type="number" value={values.email} onChange={onChange} id="email" name="email" placeholder="Enterprise email.." />
                    </SponsorInfoContainer>
                </PageOneForm>
            </FormContainer>
            <FormButtonContainer>
                <BackButton onClick={() => navigate('/onboarding')}>Back</BackButton>
                <NextButton onClick={() => setCurrentStep(Steps.STEP2)}>Next</NextButton>
            </FormButtonContainer>
            </>
    )

}

export default OnboardSponsorPageOne