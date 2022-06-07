import styled from 'styled-components';

export const Container = styled.div`
    /* height: 20vh; */
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 60vh;
`

export const ImageWrapper = styled.div`
    flex: 2;

    overflow-y: hidden;

    & img {
        /* height: 100%; */
        width: 100%;
        /* object-fit: cover; */
    }
`

export const ContentWrapper = styled.div`
    flex: 3;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0px 5vw;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        flex-direction: column;
    }
`

export const MediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    flex: 1;

    width: 100%;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;

    padding: 20px 30px;
    flex: 2;
`

export const ActionItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    
    height: 100%;
    padding: 25px 0px;

    & button {
        margin: 0px 5px;
    }
`

export const ProfileImgWrapper = styled.div`
    position: absolute;
    bottom: 7vh;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        bottom: -2vh;
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        bottom: -2vh;
    }
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        justify-content: flex-end;
        width: 100%;
        padding: 10px;
    }
`

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`

export const Follower = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
    font-size: max(0.6vw, 5px);
`

export const MetricWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        flex-direction: row;
    }
`

export const Metrics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    & p {
        font-size: 1em;
        padding: 0px;
        margin: 0px;
        margin-left: 8px;
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        margin-left: 5px;
    }
`

export const TopLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
    width: 100%;
`

export const Name = styled.p`
    font-size: 3rem;
    margin: 0px;
    padding: 0px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}) {
        font-size: 2.5rem;
    }
`

export const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;

    opacity: 0.5;

    & * {
       margin: 0px 5px; 
    }
`

export const VerticalLine = styled.div`
    /* border-left: 2px solid ${({ theme }) => theme.colors.onSurface + 'ab'}; */
    border-left: 1px solid black;
    height: 2.5em;
    margin: 0px 10px;
`

export const BtnText = styled.div`
    margin-left: 8px;
`