import styled from 'styled-components'
import { Flex } from '../../../styles/Flex.styled'
import { Container } from '../../../styles/Container.styled'
import { FaFileContract } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'


export const ProfileContainer = styled.div`
    /* color: #fff; */
    /* background: #f9f9f9; */

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ProfileWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    /* grid-template-areas: 'col1 col2'; */
    grid-template-areas: 'col1 col1';

    @media screen and (max-width: 760px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: ${({ gridArea }) => gridArea};
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    align-items: center;
    justify-content: center;
    justify-items: center;
`

export const TopLine = styled.p`
    color: #000;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const AccountId = styled.p`
    color: #454545;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Details = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #000;
    text-align: center;
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

// export const ImgDivider = styled.div`
//     position: absolute;
//     top: 0;
//     /* bottom: 0; */
//     /* right: 0; */
//     left: 0;
//     height: 100%;
//     overflow: hidden;
//     line-height: 0;
//     transform: rotate(90deg);

//     /* position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden; */

//     & > svg {
//         position: relative;
//         display: block;
//         width: calc(100% + 1.3px);
//         height: 150px;
//     }

//     & > path {
//         fill: #FFFFFF;
//     }
// `

//#region Profile Elements

// export const ProfileContainer = styled.div`
//     display: flex;
//     /* padding: 110px 20px 44px 30px; */
//     /* padding-right: 50px; */
//     margin: 40px 0;
//     padding: 60px;
//     align-items: start;
//     flex-direction: column;

//     @media (max-width: ${({ theme }) => theme.mobile.size}) {
//         padding: 0px;
//         padding-top: 20px;
//         align-items: center;
//     }
// `

// export const ProfileFlex = styled(Flex)`
//     /* height: 400px; */
//     flex-direction: row;
//     justify-content: space-around;
//     height: 400px;

//     @media (max-width: ${({ theme }) => theme.mobile.sizeM}) {
//         flex-direction: column;
//         height: auto;
//     }

//     @media (max-width: ${({ theme }) => theme.mobile.size}) {
//         flex-direction: column;
//         height: auto;
//     }
// `

// export const ProfileImageContainer = styled.div`
//     /* margin-right: 24px; */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: 2;

//     @media (max-width: ${({ theme }) => theme.mobile.size}) {
//         width: 30%;
//     }
// `

// export const ProfileImage = styled.img`
//     /* width: 150px; */
// `

// export const ProfileIcon = styled(FaUserCircle)`
//     font-size: 14rem;
//     transition: all 0.2s ease-in-out;

//     /* color: rgb(100, 100, 100); */
//     color: #ccc;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         /* color: ${({ theme }) => theme.colors.primary}; */
//         color: ${({ theme }) => theme.colors.primary};
//     }

//     @media screen and (max-width: ${({ theme }) => theme.mobile.sizeM}) {
//         font-size: 5rem;
//     }
// `

// export const ProfileDetailContainer = styled.div`
//     z-index: 3;

//     /* @media (max-width: ${({ theme }) => theme.mobile.size}) {
//         font-size: 0.8rem;
//     } */
// `

// export const ProfileDetail = styled.p`
//     color: #fff;
//     font-size: 1.2em;
//     text-align: start;
//     max-width: 600px;

//     @media screen and (max-width: ${({ theme }) => theme.mobile.sizeM}) {
//         font-size: 1em;
//         text-align: center;
//     }

//     /* @media screen and (max-width: ${({ theme }) => theme.mobile.size}) {
//         font-size: 1em;
//     } */
// `
// //#endregion Profile Elements

// //#region contract files
// export const ContractFilesContainer = styled.div`
//     padding: 20px;
//     z-index: 2;
// `

// export const ContractFileLink = styled.button`
//     margin: 10px;
//     background: none;
//     border: none;

//     @media (max-width: ${({ theme }) => theme.mobile.size}) {
//         font-size: 50px;
//         margin: 5px;
//     }
// `

// export const ContractFileIcon = styled(FaFileContract)`
//     font-size: 70px;
//     /* color: ${({ theme }) => theme.colors.primary}; */
//     fill: url(#blue-gradient);

//     @media screen and (max-width: ${({ theme }) => theme.mobile.sizeM}) {
//         font-size: 50px;
//     }

//     /* @media screen and (max-width: ${({ theme }) => theme.mobile.size}) {
//         font-size: 50px;
//     } */
// `
// //#endregion contract files

// //#region Block

// // export const BlockContainer = styled(Container)`
// export const BlockContainer = styled.div`
//     /* min-height: 586px; */

//     background: #0c0c0c;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 30px;
//     height: 800px;
//     width: 100%;
//     position: relative;
//     z-index: 1;

//     :before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
//         z-index: 2;
//     }
// `

// export const BlockFlex = styled(Flex)`
//     min-height: 1000px;
//     margin: 0px auto;
// `

//#endregion Block