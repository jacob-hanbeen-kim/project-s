import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100vw;
    padding: 20px 80px ;
    /* height: 100vh; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        flex-direction: column;
    }
`

export const ContentContainer = styled.div`
    /* max-height: 100%; */
    padding: 0px 30px;
    flex: 2;

    align-items: flex-start;
    position: relative;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        flex: 1;
    }
`

export const Section = styled.section`
    text-align: start;
    width: inherit;
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.fontDefault};
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
    color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.fontDefault};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ImgWrap = styled.div`
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const SupportContainer = styled.div`
    align-items: flex-start;
    position: relative;
`

export const SupportSticky = styled.div`
    overflow-y: auto;
    position: sticky;
    top: 7rem;
    bottom: 0;

    padding: 0px 30px;

    height: 90vh;

    /* border-left: 2px solid ${({ theme }) => theme.colors.border}; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        border: 0px;
        border-top: 2px solid ${({ theme }) => theme.colors.border};
        padding-top: 30px;
        margin-top: 30px;
    }
`