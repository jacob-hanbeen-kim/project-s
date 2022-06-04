import {
    StyledMenu,
    MenuItems,
    DropdownList,
    ProfileDropDown,
    DropdownItem,
    StyledNavLink,
    SubNavLink,
    MenuBar,
    BarIcon,
    CloseIcon,
    NavLinkCaption,
    NavLinkIcon
} from './Menu.styled';
import { Toggler } from '../../../styles/Toggle.styled';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaRegCommentDots, FaHome, FaRegBell } from 'react-icons/fa'
import { IoIosGlobe } from "react-icons/io";
import { ProfileImg } from '../..';

const Menu = ({ logout, toggleTheme, getUsername, currentUser, onSidebarToggle, isSidebarOpen, theme }) => {
    return (
        <StyledMenu>
            <StyledNavLink to='/'>
                <NavLinkIcon><FaHome /></NavLinkIcon>
                <NavLinkCaption>Home</NavLinkCaption>
            </StyledNavLink>
            <StyledNavLink to='/explore'>
                <NavLinkIcon><IoIosGlobe /></NavLinkIcon>
                <NavLinkCaption>Explore</NavLinkCaption>
            </StyledNavLink>
            <StyledNavLink to='/messages/inbox'>
                <NavLinkIcon><FaRegCommentDots /></NavLinkIcon>
                <NavLinkCaption>Message</NavLinkCaption>
            </StyledNavLink>
            <StyledNavLink to='/notifcation'>
                <NavLinkIcon><FaRegBell /></NavLinkIcon>
                <NavLinkCaption>Notification</NavLinkCaption>
            </StyledNavLink>
            <StyledNavLink to='/login'>
                <ProfileImg hasProfileImg={currentUser !== null} src={process.env.PUBLIC_URL + `/images/account/${getUsername()}/profileImg.png`} />
                <NavLinkCaption>Profile</NavLinkCaption>
            </StyledNavLink>
            {/* <DropdownItem>
                <ProfileLink to='/login'>
                    <ProfileImg hasProfileImg={currentUser !== null} src={process.env.PUBLIC_URL + `/images/account/${getUsername()}/profileImg.png`} />
                </ProfileLink >
                {currentUser &&
                    <ProfileDropDown>
                        <SubNavLink to="/account">Profile</SubNavLink>
                        <SubNavLink to="/account/edit">Settings</SubNavLink>
                        {
                            currentUser &&
                            <SubNavLink to="/" onClick={() => { logout(); }}>Logout</SubNavLink>
                        }
                    </ProfileDropDown>
                }
            </DropdownItem > */}
            {/* <Toggler onClick={() => toggleTheme()}>
                {
                    theme === 'light' ?
                        <FiMoon /> :
                        <FiSun />
                }
            </Toggler> */}
            <MenuBar onClick={onSidebarToggle}>
                {
                    isSidebarOpen ?
                        <CloseIcon /> :
                        <BarIcon />
                }
            </MenuBar>
        </StyledMenu >
    )
}

export default Menu