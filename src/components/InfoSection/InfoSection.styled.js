import styled from 'styled-components'

const themes = {
    light: {
        background: '#f9f9f9',
        toplineColor: 'primary',
        headingColor: '#010606',
        subtitleColor: '#010606'

    },
    dark: {
        background: '#535DCA',
        headingColor: '#f7f8fa',
        subtitleColor: '#fff',
    }
}

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ selectedTheme }) => themes[selectedTheme].background};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
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

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ hasImage, imgStart }) => hasImage ? (imgStart ? `'col2 col1'` : `'col1 col2'`) : `'col1'`};

    @media screen and (max-width: 760px) {
        grid-template-areas: ${({ hasImage, imgStart }) => hasImage ? (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`) : `'col1'`};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: ${({ selectedTheme, theme }) => theme.colors[themes[selectedTheme].toplineColor]};
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
    color: ${({ selectedTheme }) => themes[selectedTheme].headingColor};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ selectedTheme }) => themes[selectedTheme].subtitleColor};
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