import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    MenuList,
    SidebarLink,
    ProfileContainer,
    ProfileEditWrapper,
    ProfileSettingContainer,
    SubmitButton,
    ProfileEditInput,
    ProfileEditLabel,
    CheckboxWrapper,
    CheckboxInput,
    CheckboxLabel,
    ProfileWrapper,
    TopLine
} from './Settings.styled';

import { ProfileImg, AccountTag, MembershipStatus, FileUploader } from '../../../components';
import ErrorPage from '../../ErrorPage/ErrorPage';

import { useAuth } from '../../../contexts/AuthContext';

const Settings = ({ }) => {

    const { currentUser } = useAuth();

    return (

        <ProfileSettingContainer>
                    <>
                        <SidebarContainer>
                            <SidebarWrapper>
                                <SidebarMenu>
                                    <MenuList>
                                        <li><SidebarLink to="/account/settings">Profile</SidebarLink></li>
                                        <li><SidebarLink to="/something">Something</SidebarLink></li>
                                        <li><SidebarLink to="/something">Something</SidebarLink></li>
                                        <li><SidebarLink to="/something">Something</SidebarLink></li>
                                        <li><SidebarLink to="/something">Something</SidebarLink></li>
                                        <li><SidebarLink to="/something">Something</SidebarLink></li>
                                        {/* {
                                isConnected ? 
                            } */}
                                    </MenuList>
                                </SidebarMenu>
                            </SidebarWrapper>
                        </SidebarContainer>
                        <ProfileContainer>
                        <ProfileEditWrapper>
                            <h2>Profile Settings</h2>
                            <ProfileEditLabel for="fname">First Name: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your first name.." />

                            <ProfileEditLabel for="lname">Last Name: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your last name.." />

                            <ProfileEditLabel for="email">Email: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your email.." />

                            <ProfileEditLabel for="nname">Nickname: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" placeholder="Your nickname.." />

                            <ProfileEditLabel for="userType">User Type: </ProfileEditLabel>
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
                            <TopLine>{currentUser.name}</TopLine>
                            {/* <MembershipStatus size='1.5rem'> Membership Status : </MembershipStatus> */}
                            <AccountTag account={currentUser.id} />
                        </ProfileWrapper>
                        </ProfileContainer>
                    </>
        </ProfileSettingContainer>
    )
}

export default Settings
