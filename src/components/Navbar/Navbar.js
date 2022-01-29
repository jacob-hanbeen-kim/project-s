import {
    NavContainer,
    Nav,
    NavbarLeft,
    StyledLink,
    LogoLink,
    Menu,
    MenuItems,
    ProfileDropDown,
    DropDownList,
    SubA,
    StyledA,
    ProfileLink,
    MenuBar,
    BarIcon,
    CloseIcon,
    ProfileIcon,
    ProfileImg,
    DropDownContent
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
                    <MenuItems>
                        <DropDownList>
                            <StyledA href="/brands">Brands</StyledA>
                            <DropDownContent>
                                <SubA to="/brands/link1">Link 1</SubA>
                                <SubA to="/brands/link2">Link 2</SubA>
                                <SubA to="/brands/link3">Link 3</SubA>
                            </DropDownContent>
                        </DropDownList>
                        <DropDownList>
                            <StyledA href="/agents">Agents</StyledA>
                            <DropDownContent>
                                <SubA to="/agents/link1">Link 1</SubA>
                                <SubA to="/agents/link2">Link 2</SubA>
                                <SubA to="/agents/link3">Link 3</SubA>
                            </DropDownContent>
                        </DropDownList>
                        <DropDownList>
                            <StyledA href="/corporates">Corporates</StyledA>
                            <DropDownContent>
                                <SubA to="corporates/link1">Link 1</SubA>
                                <SubA to="corporates/link2">Link 2</SubA>
                                <SubA to="corporates/link3">Link 3</SubA>
                            </DropDownContent>
                        </DropDownList>
                        <DropDownList>
                            <StyledA href="/crowdfunding">CrowdFunding</StyledA>
                            <DropDownContent>
                                <SubA to="crowdfunding/link1">Link 1</SubA>
                                <SubA to="crowdfunding/link2">Link 2</SubA>
                                <SubA to="crowdfunding/link3">Link 3</SubA>
                            </DropDownContent>
                        </DropDownList>
                        <ProfileLink to='/login'>
                        {isConnected ? 
                            <DropDownList>
                                <ProfileImg src={'images/login/profileImg.jpg'} />
                                <ProfileDropDown>
                                    <SubA to="crowdfunding/link1">Profile</SubA>
                                    <SubA to="crowdfunding/link2">Favorites</SubA>
                                    <SubA to="crowdfunding/link3">Watchlist</SubA>
                                    <SubA to="crowdfunding/link3">Settings</SubA>
                                    <SubA to="crowdfunding/link3">Logout</SubA>
                                    <SubA to="crowdfunding/link3">NightMode</SubA>
                                </ProfileDropDown>
                            </DropDownList> :
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
                    </MenuItems>
                    
                </Menu>
            </Nav>
        </NavContainer >
    )
}

export default Navbar