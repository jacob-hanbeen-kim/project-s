import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    flex-direction: column;

    height: 100%;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeXL}) {
        flex-direction: row;
        justify-content: flex-start;
        width: 100vw;
    }
`

export const UploadContainer = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    height: 25%;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeXL}) {
        height: 100%;
        margin: 0;
        /* width: 25vw; */
        width: 250px;
        margin-right: 20px;
    }
`

export const Uploader = styled.div`
    width: 250px;
    height: 200px;
    border: 1px dashed;
`

export const ApparelListContainer = styled.div`
    margin: 0px;
    padding: 20px;
    height: 75%;

    position:relative;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeXL}) {
        overflow-x: scroll;
        height: 100%;
        width: 75vw;
    }
`

export const ApparelList = styled.div`
    position: sticky;
    top: 0;
    height: 100%;
    overflow-y: scroll;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeXL}) {
        overflow-y: hidden;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
`

export const ApparelItem = styled.div`
    width: 250px;
    height: 200px;
    flex-shrink: 0;

    padding: 20px;
    ${(props) => props.selected && `background-color: ${props.theme.colors.border};`};
`