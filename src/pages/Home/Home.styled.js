import styled from 'styled-components'
import { Flex } from '../../styles/Flex.styled'
import { Container } from '../../styles/Container.styled'
import { FaFileContract } from 'react-icons/fa';

export const HomeContainer = styled(Flex)`
    flex-direction: column;
`

export const BlockContainer = styled(Container)`
    min-height: 586px;
`

export const BlockFlex = styled(Flex)`
    min-height: 800px;
    margin: 0px auto;
`

export const BlockBackgroundImage = styled.div`
    width: 100%;
    position: absolute;
    overflow: hidden;
`

export const BlockImage = styled.div`
    /* background-image: url('./home_background.jpeg'); */
    /* background-image: url('https://images8.alphacoders.com/971/971968.jpg'); */
    background-color: ${({ theme }) => theme.colors.primary};
    background-size: cover;
    /* background-color: #fff; */
    background-position: center center;
    opacity: 0.2;
    height: 586px;
    filter: blur(8px);
    mask: linear-gradient(#fff, transparent);
`
/**  Profile Elements **/

export const ProfileContainer = styled.div`
    display: flex;
    /* padding: 110px 20px 44px 30px; */
    padding-right: 50px;
    align-items: start;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        padding: 0px;
        padding-top: 20px;
        align-items: center;
    }
`

export const Profile = styled(Flex)`
    /* height: 400px; */
    flex-direction: row;
    justify-content: space-around;
    height: 400px;

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        flex-direction: column;
        height: auto;
    }
`

export const ProfileImageContainer = styled.div`
    /* margin-right: 24px; */
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        width: 30%;
    }
`

export const ProfileImage = styled.img`
    /* width: 150px; */
`

export const ProfileDetailContainer = styled.div`

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        font-size: 0.8rem;
    }
`

export const ProfileDetail = styled.p`

`

export const ContractFilesContainer = styled.div`
    padding: 20px;
`

export const ContractFileLink = styled.button`
    margin: 10px;
    background: none;
    border: none;

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        font-size: 50px;
        margin: 5px;
    }
`

export const ContractFileIcon = styled(FaFileContract)`
    font-size: 70px;
    /* color: ${({ theme }) => theme.colors.primary}; */
    fill: url(#blue-gradient);

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        font-size: 50px;
    }
`

/**  TshirtDesign Elements **/

export const TshirtDesignContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'};

    & > div {
        flex: 1;
    }

    @media(max-width: ${({ theme }) => theme.mobile.size}) {
        flex-direction: column;
    }
`

export const TshirtDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 550px;
    z-index: 2;

    background-color: rgb(251, 253, 255);
    border-radius: ${({ theme }) => theme.border.radius};
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 10px 0px;
`

export const TshirtImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* /* background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); */
    /* background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}, yellow, black); */

    width: 550px;
    height: 550px;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;

        border-top-left-radius: inherit;
        border-top-right-radius: inherit;

        opacity: 1;
        transition: opacity 400ms ease 0s;
    }
`

export const TshirtButtonContainer = styled.div`
    border: none;
    width: 100%;
    font-weight: 600;
    padding: 16px;
    color: rgb(53, 56, 64);
    text-align: center;
    box-sizing: border-box;
`

/** Contract Requisites Elements **/

export const ContractRequisitesSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 120px;
`