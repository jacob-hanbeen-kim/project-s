import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    padding: 20px 48px ;
    height: 100vh;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    }
`

export const SideBarContainer = styled.div`
    border-right: 2px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.sidebar};

    margin-right: 50px;
    /* height: 100vh; */
`

export const ApparelContainer = styled.div`
    
`