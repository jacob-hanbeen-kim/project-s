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
`

export const MediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    flex: 1;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 0px 30px;
    flex: 2;
`

export const ActionItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const ProfileImgWrapper = styled.div`
    position: absolute;
    bottom: 8vh;
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 7px;
`

export const Metrics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    & p {
        font-size: 12px;
        padding: 0px;
        margin: 0px;
        margin-left: 8px;
    }
`