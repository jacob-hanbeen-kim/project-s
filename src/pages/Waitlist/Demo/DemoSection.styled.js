import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`

export const DemoContainer = styled.div`
    height: 70vh;
    width: 95vw;

    margin: 15px;

    background-color: ${({ theme }) => theme.colors.surface};;
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${({ theme }) => theme.colors.border};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`