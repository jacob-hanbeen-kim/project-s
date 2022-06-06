import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    padding: 20px 48px ;
    /* height: 100vh; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    }
`

export const ContentContainer = styled.div`
    overflow-y: auto;
    padding: 0px 30px;
`

export const Section = styled.section`
    text-align: start;

    // textwrap
    /*
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    */

    h1 {
        margin-bottom: 24px;
        font-size: 48px;
        line-height: 1.1;
        font-weight: 600;
        color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.fontDefault};

        @media screen and (max-width: 480px) {
            font-size: 32px;
        }
    }

    h2, h3, h4 {
        color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.fontDefault};
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        margin-bottom: 16px;
    }

    img {
        /* max-width: 555px; */
        height: 100%;
        width: 100%;
        /* margin: 0 0 10px 0; */
        margin: 20px 0px;
        /* padding-right: 0; */
    }

    video {
        height: 100%;
        width: 100%;
    }
`