import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ items }) => {

    return (
        items ?
            <SidebarContainer>
                <SidebarMenu>
                    <MenuList>
                        {
                            items.map((item) => {
                                return (<li key={item}><SidebarLink to='#'>{item}</SidebarLink></li>);
                            })
                        }
                    </MenuList>
                </SidebarMenu>
            </SidebarContainer> :
            <></>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
    position: sticky;
    top: 9rem;
    bottom: 0;

    /* width: 100%; */
    border-width: 0px;

    /* height: calc(100% - 72px); */
    overflow: auto;
    /* filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px); */
    transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
    visibility: visible;
    opacity: 1;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        display: none;
    }
`

const SidebarMenu = styled.div`
    background-color: ${({ theme }) => theme.colors.sidebar};
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    white-space: nowrap;
    /* width: 100vw; */
`

const MenuList = styled.ul`
    flex: 1 0 0%;
    margin: 0px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    padding: 0px 20px;
    padding-bottom: 2rem;

    list-style-type: none;

    & > li {
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        /* height: 70px; */
        padding: 10px 0px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        font-size: 16px;
        flex-shrink: 0;
    }
`
const SidebarLink = styled(NavLink)`
    -webkit-box-align: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.onSurface};
    opacity: 0.75;

    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    text-decoration: none;
    cursor: pointer;

    border-bottom: solid 1px ${({ theme }) => `${theme.colors.onSurface}`};
    padding-right: 30px;
    padding-bottom: 20px;
    text-align: start;

    &:hover {
        transition: 0.2s ease-in-out;
        opacity: 1.0;
    } 
`

const SocialIcons = styled.div`
    height: 80px;
    width: 100%;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.navbar};
    z-index: 110;
    border-color: ${({ theme }) => theme.colors.border};
    border-top-style: solid;
    border-top-width: 1px;

    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`