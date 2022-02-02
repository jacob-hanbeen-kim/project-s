import styled from 'styled-components';
import { FcApproval } from 'react-icons/fc'
import { FcDislike } from "react-icons/fc";

export const MemberIcon = styled(FcApproval)`
    font-size: ${({ size }) => size ? size : '2rem'};
    transition: all 0.2s ease-in-out;

    color: rgb(100, 100, 100);

    &:hover {
        transition: all 0.2s ease-in-out;
        /* color: ${({ theme }) => theme.colors.primary}; */
        color: #000;
    }
`

export const NonMemberIcon = styled(FcDislike)`
    font-size: ${({ size }) => size ? size : '2rem'};
    transition: all 0.2s ease-in-out;

    color: rgb(100, 100, 100);

    &:hover {
        transition: all 0.2s ease-in-out;
        /* color: ${({ theme }) => theme.colors.primary}; */
        color: #000;
    }
`

export const Image = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: ${({ size }) => size ? size : '2rem'};
    height: ${({ size }) => size ? size : '2rem'};
`