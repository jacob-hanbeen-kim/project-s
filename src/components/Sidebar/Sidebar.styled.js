import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    width: 100%;
    z-index: 100;
    border-width: 0px;

    position: fixed;
    right: 0px;
    bottom: 0px;
    height: calc(100% - 72px);
    background: #fff;
    overflow: auto;
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
    transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
    visibility: visible;
    opacity: 1;


    // animation
    transform: translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px);
`

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const SidebarMenu = styled.div`
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    font-size: 16px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    white-space: nowrap;
    width: 100vw;
`

export const MenuList = styled.ul`
    background: rgb(251, 253, 255);
    flex: 1 0 0%;
    margin: 0px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    padding-left: 0px;
    list-style-type: none;

    & > li {
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        height: 80px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        font-weight: 600;
        font-size: 16px;
        flex-shrink: 0;
    }
`
export const SidebarLink = styled(NavLink)`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.base};
        transition: 0.2s ease-in-out;
    } 
`

export const SocialIcons = styled.div`
    height: 80px;
    width: 100%;
    flex-shrink: 0;
    background-color: rgb(255, 255, 255);
    z-index: 110;
    border-color: rgb(229, 232, 235);
    border-top-style: solid;
    border-top-width: 1px;

    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`