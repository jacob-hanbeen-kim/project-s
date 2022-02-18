import {
    EditProfileContainer,
    HeaderWrapper,
    EditContainer,
    ProfileTextWrapper,
    ProfileEditForm,
    ProfileEditWrapper,
    ProfileTextArea,
    SubmitButton
} from './EditProfileTab.styled'

import { useAuth } from '../../../contexts/AuthContext';

const EditProfileTab = ({ }) => {

    const { currentUser } = useAuth();

    return (
        <EditProfileContainer>
            <HeaderWrapper>
                <h3> Introduce Yourself </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
            </HeaderWrapper>
            <EditContainer>
                <ProfileTextWrapper>
                    <h3>Profile</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
                </ProfileTextWrapper>
                <ProfileEditWrapper>
                    <ProfileEditForm for="profile">
                        <ProfileTextArea id="profile" name="profile" rows="5" cols="33" placeholder="Introduce yourself..."/>
                        <SubmitButton type="submit" value="Submit" />
                    </ProfileEditForm>
                </ProfileEditWrapper>
            </EditContainer>
            <EditContainer>
                <ProfileTextWrapper>
                    <h3>Pre-Defined Sponsor Items</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
                </ProfileTextWrapper>
                <ProfileEditWrapper>
                    <ProfileEditForm for="profile">
                        <ProfileTextArea id="profile" name="profile" rows="5" cols="33" placeholder="Introduce yourself..."/>
                        <SubmitButton type="submit" value="Submit" />
                    </ProfileEditForm>
                </ProfileEditWrapper>
            </EditContainer>

        </EditProfileContainer>
    )
}

export default EditProfileTab