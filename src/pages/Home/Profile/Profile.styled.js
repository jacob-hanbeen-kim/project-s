import styled from 'styled-components'
import { Flex } from '../../../styles/Flex.styled'
import { Container } from '../../../styles/Container.styled'
import { FaFileContract } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'

//#region Profile Elements

export const ProfileContainer = styled.div`
    display: flex;
    /* padding: 110px 20px 44px 30px; */
    /* padding-right: 50px; */
    margin: 40px 0;
    padding: 60px;
    align-items: start;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        padding: 0px;
        padding-top: 20px;
        align-items: center;
    }
`

export const ProfileFlex = styled(Flex)`
    /* height: 400px; */
    flex-direction: row;
    justify-content: space-around;
    height: 400px;

    @media (max-width: ${({ theme }) => theme.mobile.sizeM}) {
        flex-direction: column;
        height: auto;
    }

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
    z-index: 2;

    @media (max-width: ${({ theme }) => theme.mobile.size}) {
        width: 30%;
    }
`

export const ProfileImage = styled.img`
    /* width: 150px; */
`

export const ProfileIcon = styled(FaUserCircle)`
    font-size: 14rem;
    transition: all 0.2s ease-in-out;

    /* color: rgb(100, 100, 100); */
    color: #ccc;

    &:hover {
        transition: all 0.2s ease-in-out;
        /* color: ${({ theme }) => theme.colors.primary}; */
        color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile.sizeM}) {
        font-size: 5rem;
    }
`

export const ProfileDetailContainer = styled.div`
    z-index: 3;

    /* @media (max-width: ${({ theme }) => theme.mobile.size}) {
        font-size: 0.8rem;
    } */
`

export const ProfileDetail = styled.p`
    color: #fff;
    font-size: 1.2em;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: ${({ theme }) => theme.mobile.sizeM}) {
        font-size: 1em;
    }

    /* @media screen and (max-width: ${({ theme }) => theme.mobile.size}) {
        font-size: 1em;
    } */
`
//#endregion Profile Elements

//#region contract files
export const ContractFilesContainer = styled.div`
    padding: 20px;
    z-index: 2;
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

    @media screen and (max-width: ${({ theme }) => theme.mobile.sizeM}) {
        font-size: 50px;
    }

    /* @media screen and (max-width: ${({ theme }) => theme.mobile.size}) {
        font-size: 50px;
    } */
`
//#endregion contract files

//#region TshirtDesign Elements

export const TshirtDesignContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'};

    & > div {
        flex: 1;
    }

    /* @media(max-width: ${({ theme }) => theme.mobile.sizeM}) {
        display: none;
    } */

    /* @media(max-width: ${({ theme }) => theme.mobile.size}) {
        display: flex;
        /* flex-direction: column; */
    } */
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
    /* box-shadow: rgb(251, 253, 255, 0.25) 0px 0px 10px 10px; */
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

//#endregion TshirtDesign Elements

//#region Block

// export const BlockContainer = styled(Container)`
export const BlockContainer = styled.div`
    /* min-height: 586px; */

    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    width: 100%;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
        z-index: 2;
    }
`

export const BlockFlex = styled(Flex)`
    min-height: 1000px;
    margin: 0px auto;
`

export const ProfileBackground = styled.div`
    /* width: 100%;
    position: absolute;
    overflow: hidden; */

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    /* -o-object-fit: cover; */
    object-fit: cover;
    background: #232a34;
`


//#endregion Block