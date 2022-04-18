import {
    NavContainer,
    Nav,
    NavbarLeft,
    LogoLink
} from './Navbar.styled';
import { Logo } from '../';
// import Menu from './Menu';

// import { useAuth } from '../../contexts/AuthContext';


const Navbar = ({ isSidebarOpen, onSidebarToggle, theme, toggleTheme }) => {

    // const { currentUser, logout } = useAuth();

    // const getUsername = () => {
    //     console.log(currentUser);
    //     if (currentUser) return currentUser.name;
    //     return '';
    // }

    return (
        <NavContainer>
            <Nav>
                <NavbarLeft>
                    <LogoLink to="/" onClick={() => { isSidebarOpen && onSidebarToggle() }}>
                        <Logo isDark={theme === 'dark'} />
                    </LogoLink>
                </NavbarLeft>
            </Nav >
            {/* <Menu
                logout={logout}
                toggleTheme={toggleTheme}
                getUsername={getUsername}
                currentUser={currentUser}
                onSidebarToggle={onSidebarToggle}
                theme={theme}
                isSidebarOpen={isSidebarOpen}
            /> */}
        </ NavContainer >
    )
}

export default Navbar