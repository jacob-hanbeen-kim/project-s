import {
    OnboardSponseeContainer,
    TitleContainer,
    TitleDescription,
    DescriptionContainer,
    Header,
    CheckboxWrapper,
    FormContainer,
    PageOneForm,
    FormInputLabel,
    SponseeInfoContainer,
    FormInput
} from './OnboardSponsee.styled';

const OnboardSponsee = ({}) => {
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
            <FormContainer>
                <PageOneForm>
                    <label>Are you an...</label>
                    <CheckboxWrapper>
                        <select name="userType" id="userType">
                            <optgroup label="userType">
                                <option>Choose Option</option>
                                <option value="Sponsee">Athlete</option>
                                <option value="Sponsor">Sponsor</option>
                                <option value="Agent">Agent</option>
                            </optgroup>
                        </select>
                    </CheckboxWrapper>
                    <SponseeInfoContainer>
                        <FormInputLabel for="fname">First Name</FormInputLabel>
                        <FormInput type="text" id="fname" name="firstname" placeholder="Your first name.." />
                        
                        <FormInputLabel for="lname">Last Name</FormInputLabel>
                        <FormInput type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <FormInputLabel for="email">Email</FormInputLabel>
                        <FormInput type="text" id="email" name="email" placeholder="Your email.." />

                        <FormInputLabel for="phone">Phone Number</FormInputLabel>
                        <FormInput type="text" id="phone" name="phone" placeholder="Your number.." />
                    </SponseeInfoContainer>

                    <label>What sport do you play?</label>
                    <CheckboxWrapper>
                        <select name="userType" id="userType">
                            <optgroup label="userType">
                                <option>Choose Option</option>
                                <option value="Sponsee">Basketball</option>
                                <option value="Sponsor">Soccer</option>
                                <option value="Agent">Baseball</option>
                            </optgroup>
                        </select>
                    </CheckboxWrapper>

                    <label>Do you have an existing agency representing your brand?</label>
                    <input type="radio" id="YesAgency" name="YesAgency" value="YesAgency" />
                    <label for="YesAgency">Yes</label><br />
                    <input type="radio" id="NoAgency" name="NoAgency" value="NoAgency" />
                    <label for="NoAgency">No</label><br />
                </PageOneForm>
            </FormContainer>
        </OnboardSponseeContainer>
    )
}

export default OnboardSponsee