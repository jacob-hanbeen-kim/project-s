import styled from 'styled-components'

export const Container = styled.div`
    
    width: ${({ size }) => size ? size : '100%'};
    height: ${({ size }) => size ? size : '100%'};

    & img {
        width: 100%;
        height: 100%;
    }
`