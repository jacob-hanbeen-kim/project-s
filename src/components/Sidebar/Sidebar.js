import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    MenuList,
    SidebarLink,
    SocialIcons
} from './Sidebar.styled';

import { Toggler } from '../../styles/Toggle.styled';
import { FiSun, FiMoon } from 'react-icons/fi';

const Sidebar = ({ onSidebarToggle, isConnected, onLogout, theme, toggleTheme }) => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <MenuList>
                        <li><SidebarLink to="/brands" onClick={onSidebarToggle} >Brands</SidebarLink></li>
                        <li><SidebarLink to="/agents" onClick={onSidebarToggle} >Agents</SidebarLink></li>
                        <li><SidebarLink to="/corporates" onClick={onSidebarToggle} >Corportaes</SidebarLink></li>
                        <li><SidebarLink to="/crowdfunding" onClick={onSidebarToggle} >Crowdfunding</SidebarLink></li>
                        <li><SidebarLink to="/account" onClick={onSidebarToggle} >Account</SidebarLink></li>
                        {
                            isConnected &&
                            <li><SidebarLink to="/" onClick={() => { onSidebarToggle(); onLogout(); }} >Log Out</SidebarLink></li>
                        }
                        <li><Toggler onClick={
                            () => toggleTheme()
                        }>{
                                theme === 'light' ?
                                    <FiMoon size={26} /> :
                                    <FiSun size={26} />
                            }</Toggler></li>
                    </MenuList>
                    <SocialIcons>

                    </SocialIcons>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
