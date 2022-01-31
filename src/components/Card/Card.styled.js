import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    margin: 40px 0;
    padding: 60px;

    /* & > div {
        flex: 1;
    } */
`

export const CardFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ layout }) => layout || 'column'};

    /* max-width: 550px; */
    width: 100%;
    z-index: 2;

    background-color: ${({ backgroundColor }) => backgroundColor || 'rgb(251, 253, 255)'};
    border-radius: ${({ theme }) => theme.border.radius};
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 10px 0px;

    @media(max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: ${({ layout }) => (layout === 'column' || layout === 'column-reverse') ? layout : 'column'};
    }
`

export const CardImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    border-top-left-radius: ${({ layout }) => (layout === 'column' || layout === 'row') ? 'inherit' : 'none'};
    border-top-right-radius: ${({ layout }) => (layout === 'column' || layout === 'row-reverse') ? 'inherit' : 'none'};
    border-bottom-left-radius: ${({ layout }) => (layout === 'row' || layout === 'column-reverse') ? 'inherit' : 'none'};
    border-bottom-right-radius: ${({ layout }) => (layout === 'row-reverse' || layout === 'column-reverse') ? 'inherit' : 'none'};
    

    img {
        width: 100%;
        height: 100%;

        border-radius: inherit;
    }
`

export const CardContent = styled.div`
    width: 100%;
    font-weight: 600;
    padding: 16px;
    color: ${({ color }) => color || 'rgb(53, 56, 64)'};
    text-align: center;
`