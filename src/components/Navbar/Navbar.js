import {
    NavContainer,
    Nav,
    NavbarLeft,
    StyledLink,
    LogoLink,
    Menu,
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


const Navbar = ({ isConnected, currentAccount, isSidebarOpen, onSidebarToggle }) => {

    return (
        <NavContainer>
            <Nav>
                <NavbarLeft>
                    <LogoLink to="/" onClick={() => { isSidebarOpen && onSidebarToggle() }}>
                        <Logo />
                    </LogoLink>
                </NavbarLeft>
                <Menu>
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