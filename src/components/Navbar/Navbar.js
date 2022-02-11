import {
    NavContainer,
    Nav,
    NavbarLeft,
    StyledLink,
    LogoLink,
    Menu,
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
    // ProfileIcon,
    // ProfileImg,
    DropdownContent
} from './Navbar.styled';
import { Logo } from '../';
import { Toggler } from '../../styles/Toggle.styled';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ProfileImg } from '../';


const Navbar = ({ isConnected, onLogout, isSidebarOpen, onSidebarToggle, theme, toggleTheme, user }) => {

    const getUsername = () => {
        if (user) return user.name;
        return '';
    }

    return (
        <NavContainer>
            <Nav>
                <NavbarLeft>
                    <LogoLink to="/" onClick={() => { isSidebarOpen && onSidebarToggle() }}>
                        <Logo isDark={theme === 'dark'} />
                    </LogoLink>
                </NavbarLeft>
                <Menu>
                    <MenuItems>
                        <DropdownList>
                            <DropdownItem>
                                <StyledNavLink to="/brands">Brands</StyledNavLink>
                                <DropdownContent>
                                    <SubNavLink to="/brands/tiers">By Tiers</SubNavLink>
                                    <SubNavLink to="/brands/nations">By Nations</SubNavLink>
                                    <SubNavLink to="/brands/sports">By Sports</SubNavLink>
                                </DropdownContent>
                            </DropdownItem>
                            <DropdownItem>
                                <StyledNavLink to="/agents">Agents</StyledNavLink>
                                <DropdownContent>
                                    <SubNavLink to="/agents/tiers">By Tiers</SubNavLink>
                                    <SubNavLink to="/agents/nations">By Nations</SubNavLink>
                                    <SubNavLink to="/agents/sports">By Sports</SubNavLink>
                                </DropdownContent>
                            </DropdownItem>
                        </DropdownList>
                    </MenuItems>
                    <DropdownItem>
                        <ProfileLink to='/login'>
                            {/* {isConnected ?
                                 :
                                <ProfileIcon />
                            } */}
                            <ProfileImg hasProfileImg={isConnected} src={process.env.PUBLIC_URL + `/images/account/${getUsername()}/profileImg.png`} />
                        </ProfileLink>
                        {isConnected &&
                            <ProfileDropDown>
                                <SubNavLink to="/account">Profile</SubNavLink>
                                <SubNavLink to="/account/settings">Settings</SubNavLink>
                                {
                                    isConnected &&
                                    <SubNavLink to="/" onClick={() => { onLogout(); }}>Logout</SubNavLink>
                                }
                            </ProfileDropDown>
                        }
                    </DropdownItem>
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
                </Menu>
            </Nav>
        </ NavContainer>
    )
}

export default Navbar