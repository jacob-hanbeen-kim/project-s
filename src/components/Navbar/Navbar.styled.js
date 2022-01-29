import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaRegUserCircle } from 'react-icons/fa'

export const NavContainer = styled.nav`
    /* background: ${({ theme }) => theme.colors.header}; */
    background: #fff;
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

export const Menu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */
    padding-right: 24px;
`
export const StyledLink = styled.li`
    color: rgb(100, 100, 100);
    align-items: center;
    text-decoration: none;
    padding: 0 0.8rem;
    height: 100%;
    cursor: pointer;

    font-weight: bold;
    text-transform: uppercase;

    &.active {
        color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #000;
    }
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

export const ProfileLink = styled(NavLink)`
    padding: 10px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    /* margin-left: 24px; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeS}) {
        display: none;
    }
`

export const ProfileIcon = styled(FaRegUserCircle)`
    font-size: 2rem;
    transition: all 0.2s ease-in-out;

    color: rgb(100, 100, 100);

    &:hover {
        transition: all 0.2s ease-in-out;
        /* color: ${({ theme }) => theme.colors.primary}; */
        color: #000;
    }
`

export const ProfileImg = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
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
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }
`

export const CloseIcon = styled(FaTimes)`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 1.0;
    }
`

export const MenuItems = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        display: none;
    }
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
    &:hover {
        transition: all 0.2s ease-in-out;
        display: block;
    }
`;

export const ProfileDropDown = styled(DropDownContent)`
    float: right;
    left:auto;
    right:0;
    padding: 16px 0px;
`

export const DropDownList = styled(StyledLink)`
    display: inline-block;

    &:hover ${DropDownContent} {
        transition: all 0.2s ease-in-out;
        display: block;
    }
`

export const StyledA = styled.a`
    display: inline-block;
    background-color: white;
    text-align: center;
    text-decoration: none;
    padding: 24px 3px;
    color: rgb(100, 100, 100)
`

export const SubA = styled(NavLink)`
    color: rgb(100, 100, 100);
    background-color: white;
    padding: 20px 20px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
        background-color: #f1f1f1;
    }
`