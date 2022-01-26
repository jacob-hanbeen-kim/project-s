import {
    NavContainer,
    Nav,
    NavbarLeft,
    StyledLink,
    LogoLink,
    Menu,
    DropDownList,
    SubA,
    ProfileLink,
    Bars,
    Profile,
    ProfileImg,

    DropDownContent
} from './Navbar.styled';
import { Logo } from '../';


const Navbar = ({ isConnected, currentAccount }) => {
    return (
        <NavContainer>
            <Nav>
                <NavbarLeft>
                    <LogoLink to="/">
                        <Logo />
                    </LogoLink>
                </NavbarLeft>
                <Bars />
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
                    <StyledLink to="/brands">Brands</StyledLink>
                    <StyledLink to="/agents">Agents</StyledLink>
                    <StyledLink to="/corporates">Corportaes</StyledLink>
                    <StyledLink to="/crowdfunding">Crowdfunding</StyledLink>
                    <ProfileLink to='/login'>
                        {isConnected ?
                            <ProfileImg src={'images/login/profileImg.jpg'} /> :
                            <Profile />
                        }
                    </ProfileLink>
                </Menu>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
