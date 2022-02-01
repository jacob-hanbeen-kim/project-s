import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    MenuList,
    SidebarLink,
    SocialIcons
} from './Sidebar.styled';

const Sidebar = ({ onSidebarToggle, isConnected, onLogout }) => {
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
                    </MenuList>
                    <SocialIcons>

                    </SocialIcons>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
