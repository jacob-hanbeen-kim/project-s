import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'

export const NavContainer = styled.nav`
    /* background: ${({ theme }) => theme.colors.header}; */
    background: #fff;
    max-width: 100vw;
    height: 72px;
    position: sticky;
    z-index: 110;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    transition: top 0.5s ease 0s;
    /* 
    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        flex-direction: column;
    } */
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding-left: 24px;

    /* 
    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        flex-direction: column;
    } */
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

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        display: none;
    }
`

export const StyledLink = styled(NavLink)`
    color: rgb(100, 100, 100);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.8rem;
    height: 100%;
    cursor: pointer;

    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

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

export const Bars = styled(FaBars)`
    display: none;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const ProfileLink = styled(NavLink)`
    padding: 12px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    /* margin-left: 24px; */
`

export const Profile = styled(FaRegUserCircle)`
    font-size: 2rem;
    transition: all 0.2s ease-in-out;

    color: rgb(100, 100, 100);

    &:hover {
        transition: all 0.2s ease-in-out;
        /* color: ${({ theme }) => theme.colors.primary}; */
        color: #000;
    }
`