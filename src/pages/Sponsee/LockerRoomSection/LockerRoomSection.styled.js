import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    padding: 20px 48px ;
    /* height: 100vh; */

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    }
`

export const SideBarContainer = styled.div`
    

`

export const ApparelContainer = styled.div`
    

`