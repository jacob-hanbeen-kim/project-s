import {
    Nav,
    StyledLink,
    Menu,
    ProfileLink,
    Bars,
    Profile
} from '../styles/Navbar.styled';
import Logo from './Logo';


const Navbar = () => {
    return (
        <>
            <Nav>
                <StyledLink to="/">
                    <Logo src='./images/logo_text.svg' alt='logo' />
                    {/* <h1>Project S</h1> */}
                </StyledLink>
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
                {/* <NavBtn>
                    <NavBtnLink to='/signin'>
                        <FaRegUserCircle />
                    </NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar
