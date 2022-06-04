import {
    NavContainer,
    Nav,
    NavbarLeft,
    LogoLink,
    SearchBoxContainer
} from './Navbar.styled';
import { Logo, SearchBox } from '..';
import Menu from './Menu/Menu';

import { useAuth } from '../../contexts/AuthContext';

const Navbar = ({ isSidebarOpen, onSidebarToggle, theme, toggleTheme }) => {

    const { currentUser, logout } = useAuth();

    const getUsername = () => {
        console.log(currentUser);
        if (currentUser) return currentUser.name;
        return '';
    }

    return (
        <NavContainer>
            <Nav>
                <NavbarLeft>
                    <LogoLink to="/" onClick={() => { isSidebarOpen && onSidebarToggle() }}>
                        <Logo isDark={theme === 'dark'} />
                    </LogoLink>
                    <SearchBoxContainer>
                        <SearchBox />
                    </SearchBoxContainer>
                </NavbarLeft>
                <Menu
                    logout={logout}
                    toggleTheme={toggleTheme}
                    getUsername={getUsername}
                    currentUser={currentUser}
                    onSidebarToggle={onSidebarToggle}
                    theme={theme}
                    isSidebarOpen={isSidebarOpen}
                />
            </Nav >
        </ NavContainer >
    )
}

export default Navbar