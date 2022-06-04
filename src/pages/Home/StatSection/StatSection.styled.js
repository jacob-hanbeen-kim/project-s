import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 50vh;

    padding: 7vh 7vw;
    background-color: ${({ theme }) => theme.colors.surface};
`

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    height: 100%;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    & * {
        font-weight: normal;
    }

    & span {
        color: #4B8B4A;
        font-size: 1.3em;
        font-weight: bold;
    }
`

export const SideNote = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 50%;
    margin-top: 30px;
`