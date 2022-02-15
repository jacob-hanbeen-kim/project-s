import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    MenuList,
    SidebarLink,
    ProfileEditWrapper,
    ProfileSettingContainer,
    SubmitButton,
    ProfileEditInput,
    ProfileEditLabel,
    CheckboxWrapper,
    UploadFileButton,
    UploadFileInput,
    CheckboxInput,
    CheckboxLabel,
    ProfileWrapper,
    TopLine
} from './Settings.styled';

import { ImageBackground, ProfileImg, AccountTag, MembershipStatus, FileUploader } from '../../../components';
import ErrorPage from '../../ErrorPage/ErrorPage';

import { useAuth } from '../../../contexts/AuthContext';

const Settings = ({ }) => {

    const { currentUser } = useAuth();

    return (

        <ProfileSettingContainer>
            {
                currentUser ?
                    <>
                        <SidebarContainer>
                            <SidebarWrapper>
                                <SidebarMenu>
                                    <MenuList>
                                        <li><SidebarLink to="/brands">Profile</SidebarLink></li>
                                        <li><SidebarLink to="/agents">Something</SidebarLink></li>
                                        <li><SidebarLink to="/corporates">Something</SidebarLink></li>
                                        <li><SidebarLink to="/crowdfunding">Something</SidebarLink></li>
                                        <li><SidebarLink to="/account">Something</SidebarLink></li>
                                        <li><SidebarLink to="/account">Something</SidebarLink></li>
                                        {/* {
                                isConnected ? 
                            } */}
                                    </MenuList>
                                </SidebarMenu>
                            </SidebarWrapper>
                        </SidebarContainer>
                        <ProfileEditWrapper>
                            <h2>Profile Settings</h2>
                            <ProfileEditLabel htmlFor="fname">First Name: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your first name.." />

                            <ProfileEditLabel htmlFor="lname">Last Name: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your last name.." />

                            <ProfileEditLabel htmlFor="email">Email: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your email.." />

                            <ProfileEditLabel htmlFor="nname">Nickname: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your nickname.." />

                            <ProfileEditLabel htmlFor="userType">User Type: </ProfileEditLabel>
                            <CheckboxWrapper>
                                <CheckboxLabel className="container">Sponsee
                                    <CheckboxInput type="checkbox" />
                                </CheckboxLabel>
                                <CheckboxLabel className="container">Sponsor
                                    <CheckboxInput type="checkbox" />
                                </CheckboxLabel>
                                <CheckboxLabel className="container">Agent
                                    <CheckboxInput type="checkbox" />
                                </CheckboxLabel>
                            </CheckboxWrapper>
                            <SubmitButton type="submit" value="Submit"></SubmitButton>
                        </ProfileEditWrapper>
                        <ProfileWrapper>
                            <ProfileImg hasProfileImg={true} size='10rem' />
                            <FileUploader />
                            <TopLine>Your Name</TopLine>
                            {/* <MembershipStatus size='1.5rem'> Membership Status : </MembershipStatus> */}
                            <AccountTag account={currentUser.id} />
                        </ProfileWrapper>
                    </>
                    :
                    <ErrorPage />
            }
        </ProfileSettingContainer>
    )
}

export default Settings
