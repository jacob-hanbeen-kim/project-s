import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
    background: ${({ theme }) => theme.colors.navbar};
    max-width: 100vw;
    height: 55px;
    z-index: 110;
    /* box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px; */
    transition: top 0.5s ease 0s;

    position: sticky;
    top: 0;
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
    padding-right: 24px;
`

export const SearchBoxContainer = styled.div`
    margin-left: 30px;
`

export const LogoLink = styled(NavLink)`
    align-items: center;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    padding: 8px 0px;
    position: relative;

    height: 40px;
    width: 40px;
`