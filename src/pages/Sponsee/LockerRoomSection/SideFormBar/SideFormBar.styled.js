import styled from 'styled-components';

export const Container = styled.aside`
    /* position: sticky;
    top: 9rem;
    bottom: 0; */

    display: flex;
    flex-direction: column;

    height: 100vh;
    min-width: 20vw;

    margin-right: 50px;
    
    border-right: 2px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.sidebar};

    /* @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    } */
`

export const TeamDesignContainer = styled.div`
    padding: 20px;
    margin-bottom: 30px;
`

export const SponsorDesignContainer = styled.div`
    margin: 0px;
    padding: 20px;
    height: 100%;

    border-top: 2px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Or = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 30px;
`