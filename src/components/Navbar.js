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
    DropDownContent
} from '../styles/Navbar.styled';
import Logo from './Logo';


const Navbar = () => {
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
                    {/* <StyledLink to="/">Home</StyledLink> */}
                    <DropDownList>
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
                    </ProfileLink>
                </Menu>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
