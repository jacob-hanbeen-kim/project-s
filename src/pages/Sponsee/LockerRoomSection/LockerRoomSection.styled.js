import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 80vh;
    width: 100vw;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeXL}) {
        flex-direction: column-reverse;
        margin: 30px 0px;
    }
`

export const SideBarContainer = styled.div`
    border-right: 2px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.sidebar};

    display: flex;
    justify-content: center;

    flex: 1;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeXL}) {
        margin-right: 0px;
    }
`

export const ApparelContainer = styled.div`
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageWrapper = styled.div`
    height: 300px;
`