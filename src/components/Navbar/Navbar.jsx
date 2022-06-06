import {
    NavContainer,
    Nav,
    NavbarLeft,
    LogoLink,
    SearchBoxContainer
} from './Navbar.styled';
import { Logo, SearchBox } from '..';
import Menu from './Menu/Menu';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = ({ isSidebarOpen, onSidebarToggle, theme, toggleTheme }) => {

    const { currentUser, logout } = useAuth();
    const [searchTxt, setSearchTxt] = useState('');

    const getUsername = () => {
        if (currentUser) return currentUser.name;
        return '';
    }

    const onSearch = (e) => {
        e.preventDefault();
        setSearchTxt('');
    }

    return (
        <NavContainer>
            <Nav>
                <NavbarLeft>
                    <LogoLink to="/" onClick={() => { isSidebarOpen && onSidebarToggle() }}>
                        <Logo isDark={theme === 'dark'} />
                    </LogoLink>
                    <SearchBoxContainer>
                        <form onSubmit={onSearch}>
                            <input type="submit" style={{ display: 'none' }} />
                            <SearchBox value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
                        </form>
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