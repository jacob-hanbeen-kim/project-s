import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */
    padding-right: 24px;
`

export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        /* display: none; */
    }
`

export const DropdownList = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0px;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`;

export const DropdownItem = styled.li`
    display: inline-block;
    align-items: center;
    text-decoration: none;
    padding: 0.8rem;
    cursor: pointer;

    font-weight: bold;
    text-transform: uppercase;

    &:hover ${DropdownContent} {
        transition: all 0.2s ease-in-out;
        display: block;
    }
`

export const ProfileLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.onNavbar};
    border: none;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeS}) {
        display: none;
    }
`

export const ProfileDropDown = styled(DropdownContent)`
    float: right;
    left:auto;
    right:0;
    padding: 16px 0px;
    transform: translateX(-45%);
`

export const SubNavLink = styled(NavLink)`
    color: ${({ theme }) => `${theme.colors.onNavbar}bf`};
    background-color: ${({ theme }) => theme.colors.navbar};
    padding: 20px 20px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
        background-color: ${({ theme }) => theme.colors.sidebar};
        color: ${({ theme }) => `${theme.colors.onNavbar}`};
    }
`

export const MenuBar = styled.div`
    display: none;
    padding: 10px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        /* display: block; */
        /* cursor: pointer; */
    }
`

export const BarIcon = styled(FaBars)`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.onNavbar};
    opacity: 0.75;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }
`

export const CloseIcon = styled(FaTimes)`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.onNavbar};
    opacity: 0.75;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }
`

export const StyledNavLink = styled(NavLink)`
    /* display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    height: 100%; */

    text-align: center;
    text-decoration: none;

    color: ${({ theme }) => theme.colors.onNavbar};
    cursor: pointer;

    padding: 0px 10px;

    & * {
        transition: all 0.2s ease-in-out;
        opacity: 0.85;
    }

    & img {
        opacity: 1;
        margin-bottom: 2px;
    }
    
    &:hover * {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }

    &.active * {
        opacity: 1.0;
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeS}) {
        display: none;
    }
`

export const NavLinkIcon = styled.div`
    font-size: 1.5em;
`

export const NavLinkCaption = styled.p`
    padding: 0;
    margin: 0;
    font-size: 0.5em;
`