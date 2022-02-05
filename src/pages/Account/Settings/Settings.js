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
    EditButton,
    CheckboxInput,
    CheckboxLabel,
    ProfileWrapper,
    TopLine
} from './Settings.styled';

import { InputBox } from '../../../styles/InputBox.styled';
import HeroSection from '../../Sponsee/HeroSection/HeroSection';

import { ImageBackground, ProfileImg, AccountTag, MembershipStatus } from '../../../components';
import ErrorPage from '../../ErrorPage/ErrorPage';

const Settings = ({ currentAccount, userType }) => {
    return (
        
        <ProfileSettingContainer>
        {
            currentAccount ?
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
                    <CheckboxLabel class="container">Sponsee
                        <CheckboxInput type="checkbox"/>
                    </CheckboxLabel>
                    <CheckboxLabel class="container">Sponsor
                        <CheckboxInput type="checkbox" />
                    </CheckboxLabel>
                    <CheckboxLabel class="container">Agent
                        <CheckboxInput type="checkbox" />
                    </CheckboxLabel>
                </CheckboxWrapper>
                <SubmitButton type="submit" value="Submit"></SubmitButton>
            </ProfileEditWrapper>
            <ProfileWrapper>
                <ProfileImg hasProfileImg={true} size='10rem' />
                <EditButton>Edit Photo</EditButton>
                <TopLine>Your Name</TopLine>
                {/* <MembershipStatus size='1.5rem'> Membership Status : </MembershipStatus> */}
                <AccountTag account={currentAccount} />
            </ProfileWrapper>   
            </>
        :
        <ErrorPage />
        }
        </ProfileSettingContainer>
    )
}

export default Settings
