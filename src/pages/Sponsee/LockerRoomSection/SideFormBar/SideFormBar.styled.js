import styled from 'styled-components';

export const Container = styled.aside`
    /* position: sticky;
    top: 9rem;
    bottom: 0; */

    display: flex;
    flex-direction: column;

    /* height: 100vh; */
    height: 100%;
    min-width: 20vw;


    /* @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    } */
`

export const UploadContainer = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    height: 25%;
`

export const Uploader = styled.div`
    width: 250px;
    height: 100%;
    border: 1px dashed;
`

export const ApparelListContainer = styled.div`
    margin: 0px;
    padding: 20px;
    height: 75%;

    position:relative;

    /* border-top: 2px solid ${({ theme }) => theme.colors.border}; */
    /* background-color: ${({ theme }) => theme.colors.primary}; */
`

export const ApparelList = styled.div`
    position: sticky;
    top: 0;
    height: 100%;
    overflow-y: scroll;
`

export const ApparelItem = styled.div`
    width: 250px;
    height: 200px;

    padding: 20px;
    ${(props) => props.selected && `background-color: ${props.theme.colors.border};`};
`