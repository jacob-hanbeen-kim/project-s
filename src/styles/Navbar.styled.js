import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'

export const Nav = styled.nav`
    background: ${({ theme }) => theme.colors.header};
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;

    /* 
    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        flex-direction: column;
    } */
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */
    margin-right: 24px;

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        display: none;
    }
`

export const StyledLink = styled(NavLink)`
    color: #000;
    display: flex;
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

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({ theme }) => theme.colors.primary};
    }
`