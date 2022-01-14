import styled from 'styled-components'
import { Flex } from '../styles/Flex.styled'
import { FaFileContract } from 'react-icons/fa';

/**  Profile Elements **/

export const HomeContainer = styled(Flex)`
    align-items: start;
    margin-top: 50px;
`

export const ProfileContainer = styled.div`
    display: flex;
    margin: 10px;
    align-items: start;
    flex-direction: column;
`

export const Profile = styled(Flex)`
    /* margin: 50px 0; */
    /* height: 400px; */
`

export const ProfileImage = styled.img`
    width: 150px;
    margin-right: 24px;
`

export const ContractFilesContainer = styled.div`
    padding: 20px 0;
`

export const ContractFileLink = styled.button`
    margin-right: 10px;
    background: none;
    border: none;
`

export const ContractFileIcon = styled(FaFileContract)`
    font-size: 70px;
    color: ${({ theme }) => theme.colors.primary};
`

/**  Sponsor Elements **/

export const SponsorContainer = styled.div`

`