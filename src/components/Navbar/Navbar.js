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
    ProfileIcon,
    ProfileImg,
    DropdownContent
} from './Navbar.styled';
import { Logo } from '../';
import { Toggler } from '../../styles/Toggle.styled';
import { FiSun, FiMoon } from 'react-icons/fi';


const Navbar = ({ isConnected, currentAccount, isSidebarOpen, onSidebarToggle, theme, toggleTheme }) => {

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
                                <SubNavLink to="/brands/link1">Link 1</SubNavLink>
                                <SubNavLink to="/brands/link2">Link 2</SubNavLink>
                                <SubNavLink to="/brands/link3">Link 3</SubNavLink>
                            </DropdownContent>
                        </DropdownItem>
                        <DropdownItem>
                            <StyledNavLink to="/agents">Agents</StyledNavLink>
                            <DropdownContent>
                                <SubNavLink to="/agents/link1">Link 1</SubNavLink>
                                <SubNavLink to="/agents/link2">Link 2</SubNavLink>
                                <SubNavLink to="/agents/link3">Link 3</SubNavLink>
                            </DropdownContent>
                        </DropdownItem>
                        <DropdownItem>
                            <StyledNavLink to="/corporates">Corporates</StyledNavLink>
                            <DropdownContent>
                                <SubNavLink to="corporates/link1">Link 1</SubNavLink>
                                <SubNavLink to="corporates/link2">Link 2</SubNavLink>
                                <SubNavLink to="corporates/link3">Link 3</SubNavLink>
                            </DropdownContent>
                        </DropdownItem>
                        <DropdownItem>
                            <StyledNavLink to="/crowdfunding">CrowdFunding</StyledNavLink>
                            <DropdownContent>
                                <SubNavLink to="crowdfunding/link1">Link 1</SubNavLink>
                                <SubNavLink to="crowdfunding/link2">Link 2</SubNavLink>
                                <SubNavLink to="crowdfunding/link3">Link 3</SubNavLink>
                            </DropdownContent>
                        </DropdownItem>
                    </DropdownList>
                </MenuItems>
                <ProfileLink to='/login'>
                    {isConnected ?
                        <DropdownItem>
                            <ProfileImg src={'images/login/profileImg.jpg'} />
                            <ProfileDropDown>
                                <SubNavLink to="crowdfunding/link1">Profile</SubNavLink>
                                <SubNavLink to="crowdfunding/link2">Favorites</SubNavLink>
                                <SubNavLink to="crowdfunding/link3">Watchlist</SubNavLink>
                                <SubNavLink to="crowdfunding/link3">Settings</SubNavLink>
                                <SubNavLink to="crowdfunding/link3">Logout</SubNavLink>
                                <SubNavLink to="crowdfunding/link3">NightMode</SubNavLink>
                            </ProfileDropDown>
                        </DropdownItem> :
                        <ProfileIcon />
                    }
                </ProfileLink>
                <Toggler onClick={() => toggleTheme()}>{
                    theme === 'light' ?
                        <FiMoon /> :
                        <FiSun />
                }</Toggler>
                <MenuBar onClick={onSidebarToggle}>
                    {
                        isSidebarOpen ?
                            <CloseIcon /> :
                            <BarIcon />
                    }
                </MenuBar>
            </Menu>
        </Nav>
        </NavContainer >
    )
}

export default Navbar