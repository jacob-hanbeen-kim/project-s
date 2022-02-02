import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaRegUserCircle } from 'react-icons/fa'

export const NavContainer = styled.div`
    background: ${({ theme }) => theme.colors.navbar};
    max-width: 100vw;
    height: 72px;
    position: sticky;
    z-index: 110;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    transition: top 0.5s ease 0s;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding-left: 24px;
`

export const NavbarLeft = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    padding-right: 24px;
`


export const LogoLink = styled(NavLink)`
    align-items: center;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    height: 100%;
    padding: 8px 0px;
    position: relative;
`

export const Menu = styled.div`
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
        display: none;
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

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding: 24px 0px;
    
    color: ${({ theme }) => theme.colors.onNavbar};
    opacity: 0.75;

    &.active {
        opacity: 1.0;
    }

    &:hover {
        opacity: 1.0;
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

export const ProfileIcon = styled(FaRegUserCircle)`
    font-size: 1em;
    transition: all 0.2s ease-in-out;

    color: ${({ theme }) => theme.colors.onNavbar};
    opacity: 0.75;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }
`

export const ProfileImg = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
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
        display: block;
        cursor: pointer;
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