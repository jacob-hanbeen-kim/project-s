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

export const StyledLink = styled.ul`
    color: rgb(100, 100, 100);
    display: inline-block;
    align-items: center;
    float: left;
    text-decoration: none;
    padding: 0 0.8rem;
    padding-top: 25px;
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

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
    margin-top: 10px;
`

export const DropDownList = styled(StyledLink)`
    
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
`

export const SubA = styled(StyledA)`
    color: rgb(100, 100, 100);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
        background-color: #f1f1f1;
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
    padding: 10px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    /* margin-left: 24px; */
`

export const Profile = styled(FaRegUserCircle, DropDownList)`
    font-size: 2rem;
    transition: all 0.2s ease-in-out;

    color: rgb(100, 100, 100);

    &:hover {
        transition: all 0.2s ease-in-out;
        /* color: ${({ theme }) => theme.colors.primary}; */
        color: #000;
    }
`