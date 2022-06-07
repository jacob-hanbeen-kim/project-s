import styled from 'styled-components';
import { BiMap } from 'react-icons/bi';

export const Container = styled.div`
    font-size: ${({ size }) => size ? size : '12px'};
`

export const LocationIcon = styled(BiMap)`
    color: #FF0000;
`