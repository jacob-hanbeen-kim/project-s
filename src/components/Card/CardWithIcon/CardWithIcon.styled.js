import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 10px;
    margin: 0px 20px;
    width: 100%;
    max-width: 400px;

    background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.background};
    border-radius: ${({ theme }) => theme.border.radius};
    box-shadow: rgb(4 17 29 / 25%) 0px 3px 5px 0px;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: ${({ layout }) => layout || 'column'};
    align-items: center;
    justify-content: center;
    

    margin-top: -60px;

    @media(max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: ${({ layout }) => (layout === 'column' || layout === 'column-reverse') ? layout : 'column'};
    }
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
    overflow: hidden;
    
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    /* border: 10px solid transparent; */
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 2px 0px;

    max-height: 100%;
    max-width: 100%;
    height: 120px;
    width: 120px;
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    /* width: 100%; */

    /* border-top-left-radius: ${({ layout }) => (layout === 'column' || layout === 'row') ? 'inherit' : 'none'};
    border-top-right-radius: ${({ layout }) => (layout === 'column' || layout === 'row-reverse') ? 'inherit' : 'none'};
    border-bottom-left-radius: ${({ layout }) => (layout === 'row' || layout === 'column-reverse') ? 'inherit' : 'none'};
    border-bottom-right-radius: ${({ layout }) => (layout === 'row-reverse' || layout === 'column-reverse') ? 'inherit' : 'none'}; */

    img {
        width: 100%;
        height: 100%;

        border-radius: inherit;
    }
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 50px;
    color: ${({ theme }) => theme.colors.onPrimary};
`

export const CardContent = styled.div`
    width: 100%;
    font-weight: 600;
    padding: 20px;
    color: ${({ color, theme }) => color || theme.colors.onSurface};
    text-align: center;
`

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;

    margin-bottom: 30px;
`

export const Detail = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;

    color: ${({ theme }) => theme.colors.fontMuted};
`