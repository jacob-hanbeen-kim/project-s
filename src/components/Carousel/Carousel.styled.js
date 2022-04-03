import styled from 'styled-components'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
`

export const View = styled.div`
    overflow: hidden;
    max-width: 900px;
    width: 100%;
    height: 100%;

    display: flex;
`

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    position: relative;
    white-space: nowrap;

    transform: ${({ activeIndex }) =>
        activeIndex > 0 ?
            `translate3d(-${(activeIndex - 1) * (100 / 3)}%, 0, 0);` :
            `translate3d(${100 / 3}%, 0 ,0);`
    };
    transition: transform 0.3s;
    height: 100%;
`

export const CarouselItem = styled.div`
    flex-shrink: 0;
    padding: 20px;
    height: 300px;

    transition: transform 300ms;

    width: calc(100% / 3);

    ${props => props.active ? `
        transform: scale(1.2);
        opacity: 1;
    `: `
        transform: scale(0.9);   
        opacity: 0.5;
    `
    }

    * {
        width: 100%;
        height: 100%
    }
`

export const LeftButton = styled(BsChevronLeft)`
    font-size: 40px;
    margin-right: 10px;
    cursor: pointer;
    z-index: 2;
`

export const RightButton = styled(BsChevronRight)`
    font-size: 40px;
    margin-left: 10px;
    cursor: pointer;
    z-index: 2;
`