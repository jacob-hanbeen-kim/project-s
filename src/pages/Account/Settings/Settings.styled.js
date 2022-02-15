import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Flex } from '../../../styles/Flex.styled';
import { InputBox } from '../../../styles/InputBox.styled';
import { Button } from '../../../styles/Button.styled';

export const SidebarContainer = styled.aside`
    z-index: 100;
    width:20%;

    position: right;
    overflow: auto;
    right: 0px;
    bottom: 0px;
    background-color: ${({ theme }) => theme.colors.sidebar};
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
    transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
    visibility: visible;
    opacity: 1;


    // animation
    transform: translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px);

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        width:25%;
        float: right;
    }
`

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    width: 10%;
`
export const SidebarMenu = styled.div`
    background-color: ${({ theme }) => theme.colors.sidebar};
    display: flex;
    flex-direction: column;
    font-size: 16px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    white-space: nowrap;
    width: 100vw;

    /* @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        flex-direction: row;
        position: right;
    } */
`

export const MenuList = styled.ul`
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

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        /* flex-direction: row;
        position: top; */
    }
`
export const SidebarLink = styled(NavLink)`
    -webkit-box-align: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.onNavbar};
    opacity: 0.75;

    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    /* width: 100%; */
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        opacity: 1.0;
    } 
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        flex-direction: column-reverse;
        justify-content: space-between;

    }
`

export const ProfileEditWrapper = styled.form`
    display: flex;
    width: 40%;
    /* background-color: red; */
    flex-direction: column;
    height: 100%;
    padding: 0px 50px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        width: 100%;
        margin: 20px 10px;
    }
`

export const ProfileEditInput = styled(InputBox)`

`

export const ProfileEditLabel = styled.label`
    font-size: 14px;
`

export const ProfileSettingContainer = styled(Flex)`
    display:flex;
    flex-direction: row;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        text-align: left;
        flex-direction: row;
    }
`

export const CheckboxWrapper = styled.div`
    width: 40%;
    flex-direction: row;
    padding: 10px;
`

export const CheckboxLabel = styled.label`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 15px;
`

export const CheckboxInput = styled.input`
    cursor: pointer;
`

export const SubmitButton = styled.input`
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    
    /* padding: ${({ big }) => big ? '14px 48px' : '12px 30px'}; */
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;

    font-size: ${({ big }) => big ? '20px' : '16px'};
    font-weight: 700;

    background-color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    color: ${props => props.invert ? props.theme.colors.onInvert : props.theme.colors.onPrimary};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
    }
`

//Profile 
export const ProfileWrapper = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    height: 100%;
    padding: 0px;
    align-items: center;
    justify-content: center;
    justify-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
        justify-content: flex-start;
        margin-top: 50px;
        width: 100%;
    }
`

export const TopLine = styled.h1`
    color: #000;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
