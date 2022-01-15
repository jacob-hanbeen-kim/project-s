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
                    </LogoLink>
                </NavbarLeft>
                <Bars />
                <Menu>
                    {/* <StyledLink to="/">Home</StyledLink> */}
                    <StyledLink to="/brands">Brands</StyledLink>
                    <StyledLink to="/agents">Agents</StyledLink>
                    <StyledLink to="/corporates">Corportaes</StyledLink>
                    <StyledLink to="/crowdfunding">Crowdfunding</StyledLink>
                    <ProfileLink to='/account'>
                        <Profile />
                    </ProfileLink>
                </Menu>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
