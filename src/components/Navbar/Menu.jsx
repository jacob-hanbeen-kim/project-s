import {
    StyledMenu,
    MenuItems,
    DropdownList,
    ProfileDropDown,
    DropdownItem,
    StyledNavLink,
    SubNavLink,
    ProfileLink,
    MenuBar,
    BarIcon,
    CloseIcon,
    DropdownContent,
    MessagesLink,
    MessagesIcon
} from './Navbar.styled';
import { Toggler } from '../../styles/Toggle.styled';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ProfileImg } from '../';

const Menu = ({ logout, toggleTheme, getUsername, currentUser, onSidebarToggle, isSidebarOpen, theme }) => {
    return (
        <StyledMenu>
            <MenuItems>
                <DropdownList>
                    <DropdownItem>
                        <StyledNavLink to="/explore">Explore</StyledNavLink>
                        {/* <StyledNavLink to="/brands">Brands</StyledNavLink> */}
                        {/* <DropdownContent>
                            <SubNavLink to="/brands/tiers">By Tiers</SubNavLink>
                            <SubNavLink to="/brands/nations">By Nations</SubNavLink>
                            <SubNavLink to="/brands/sports">By Sports</SubNavLink>
                        </DropdownContent> */}
                    </DropdownItem>
                </DropdownList>
            </MenuItems>
            <DropdownItem>
                <ProfileLink to='/login'>
                    <ProfileImg hasProfileImg={currentUser !== null} src={process.env.PUBLIC_URL + `/images/account/${getUsername()}/profileImg.png`} />
                </ProfileLink >
                {currentUser &&
                    <ProfileDropDown>
                        <SubNavLink to="/account">Profile</SubNavLink>
                        <SubNavLink to="/account/settings">Settings</SubNavLink>
                        {
                            currentUser &&
                            <SubNavLink to="/" onClick={() => { logout(); }}>Logout</SubNavLink>
                        }
                    </ProfileDropDown>
                }
            </DropdownItem >
            <MessagesLink to='/messages/inbox'>
                <MessagesIcon />
            </MessagesLink>
            <Toggler onClick={() => toggleTheme()}>
                {
                    theme === 'light' ?
                        <FiMoon /> :
                        <FiSun />
                }
            </Toggler>
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