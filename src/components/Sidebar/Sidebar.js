import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    MenuList,
    SidebarLink,
    SocialIcons
} from './Sidebar.styled';

import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ onSidebarToggle }) => {

    const { currentUser, logout } = useAuth();

    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <MenuList>
                        <li><SidebarLink to="/account" onClick={onSidebarToggle} >Account</SidebarLink></li>
                        <li><SidebarLink to="/explore" onClick={onSidebarToggle} >Explore</SidebarLink></li>
                        {
                            currentUser &&
                            <li><SidebarLink to="/" onClick={() => { onSidebarToggle(); logout(); }} >Log Out</SidebarLink></li>
                        }
                    </MenuList>
                    <SocialIcons>

                    </SocialIcons>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
