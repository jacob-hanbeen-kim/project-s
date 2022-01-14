import {
    NavContainer,
    Nav,
    NavbarLeft,
    StyledLink,
    LogoLink,
    Menu,
    ProfileLink,
    Bars,
    Profile
} from '../styles/Navbar.styled';
import Logo from './Logo';


const Navbar = () => {
    return (
        <NavContainer>
            <Nav>
                <NavbarLeft>
                    <LogoLink to="/">
                        <Logo />
                        {/* <h1>Project S</h1> */}
                    </LogoLink>
                </NavbarLeft>
                <Bars />
                <Menu>
                    {/* <StyledLink to="/">Home</StyledLink> */}
                    <StyledLink to="/brands" activeStyle>Brands</StyledLink>
                    <StyledLink to="/agents" activeStyle>Agents</StyledLink>
                    <StyledLink to="/corporates">Corportaes</StyledLink>
                    <StyledLink to="/crowdfunding">Crowdfunding</StyledLink>
                    <ProfileLink to='/signin'>
                        <Profile />
                    </ProfileLink>
                </Menu>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
