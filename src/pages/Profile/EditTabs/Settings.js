import { useState, useRef } from 'react';
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
    ProfileWrapper,
    TopLine
} from './Settings.styled';

import { ProfileImg, AccountTag, MembershipStatus, FileUploader } from '../../../components';
import UserService , {userFields} from '../../../services/users-service';

import { useAuth } from '../../../contexts/AuthContext';

const Settings = ({ }) => {

    const { currentUser } = useAuth();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [userType, setUserType] = useState('')

    const submitEvent = async (event) => {
        const data = userFields
            .setFirstName(firstName)
            .setLastName(lastName)
            .setEmail(email)
            .setUsertype(userType)

        await UserService.updateUser(currentUser.id, data.fields);
        event.preventDefault();
    }

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangeNickname = (event) => {
        setNickname(event.target.value);
    }

    const handleChangeUserType = (event) => {
        setUserType(event.target.value);
    }

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
                            <ProfileEditInput type="text" id="fname" name="firstname" value={firstName} onChange={event => handleChangeFirstName(event)} placeholder="Your first name.." />

                            <ProfileEditLabel for="lname">Last Name: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" value={lastName} onChange={event => handleChangeLastName(event)} placeholder="Your last name.." />

                            <ProfileEditLabel for="email">Email: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" value={email} onChange={event => handleChangeEmail(event)} placeholder="Your email.." />

                            <ProfileEditLabel for="nname">Nickname: </ProfileEditLabel>
                            <ProfileEditInput type="text" id="fname" name="firstname" value={nickname} onChange={event => handleChangeNickname(event)} placeholder="Your nickname.." />

                            <ProfileEditLabel for="userType">User Type: </ProfileEditLabel>
                            <CheckboxWrapper>
                                <select name="userType" id="userType" value={userType} onChange={event => handleChangeUserType(event)}>
                                    <optgroup label="userType">
                                        <option>Choose Option</option>
                                        <option value="Sponsee">Sponsee</option>
                                        <option value="Sponsor">Sponsor</option>
                                        <option value="Agent">Agent</option>
                                    </optgroup>
                                </select>
                            </CheckboxWrapper>
                            <SubmitButton type="submit" value="Submit" onClick={submitEvent}></SubmitButton>
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
