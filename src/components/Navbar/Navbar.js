import {
    NavContainer,
    Nav,
    NavbarLeft,
    StyledLink,
    LogoLink,
    Menu,
    MenuItems,
    ProfileLink,
    MenuBar,
    BarIcon,
    CloseIcon,
    ProfileIcon,
    ProfileImg,
    DropDownContent
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
                    {/* <DropDownList>
                        Brands
                        <DropDownContent>
                            <SubA href="/link1">Link 1</SubA>
                            <SubA href="/link2">Link 2</SubA>
                            <SubA href="/link3">Link 3</SubA>
                        </DropDownContent>
                    </DropDownList>
                    <DropDownList>
                        Agents
                        <DropDownContent>
                            <SubA href="/link1">Link 1</SubA>
                            <SubA href="/link2">Link 2</SubA>
                            <SubA href="/link3">Link 3</SubA>
                        </DropDownContent>
                    </DropDownList>
                    <DropDownList>
                        Corporates
                        <DropDownContent>
                            <SubA href="/link1">Link 1</SubA>
                            <SubA href="/link2">Link 2</SubA>
                            <SubA href="/link3">Link 3</SubA>
                        </DropDownContent>
                    </DropDownList>
                    <DropDownList>
                        CrowdFunding
                        <DropDownContent>
                            <SubA href="/link1">Link 1</SubA>
                            <SubA href="/link2">Link 2</SubA>
                            <SubA href="/link3">Link 3</SubA>
                        </DropDownContent>
                    </DropDownList>
                    <ProfileLink to='/account'>
                        <DropDownList>
                            <Profile />
                            <DropDownContent>
                                <SubA href="/link1">Link 1</SubA>
                                <SubA href="/link2">Link 2</SubA>
                                <SubA href="/link3">Link 3</SubA>
                            </DropDownContent>
                        </DropDownList>
                    </ProfileLink> */}
                    <MenuItems>
                        <StyledLink to="/brands">Brands</StyledLink>
                        <StyledLink to="/agents">Agents</StyledLink>
                        <StyledLink to="/corporates">Corportaes</StyledLink>
                        <StyledLink to="/crowdfunding">Crowdfunding</StyledLink>
                    </MenuItems>
                    <ProfileLink to='/login'>
                        {isConnected ?
                            <ProfileImg src={'images/login/profileImg.jpg'} /> :
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