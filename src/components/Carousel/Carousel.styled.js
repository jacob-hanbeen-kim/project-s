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
    max-width: ${({ maxWidth }) => maxWidth};
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

    transform: ${({ activeIndex, displayCount, align }) =>
        activeIndex > 0 ?
            `translate3d(-${(activeIndex - 1) * (100 / displayCount)}%, 0, 0);` :
            align === 'center' ?
                `translate3d(${100 / displayCount}%, 0 ,0);` :
                `translate3d(0, 0 ,0);`
    };
    transition: transform 0.3s;

    width: 100%;
    height: 100%;
`

export const CarouselItem = styled.div`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 20px;
    /* max-height: 300px; */
    height: 100%;

    transition: transform 300ms;

    width: ${({ displayCount }) => `calc(100% / ${displayCount})`};

    ${props => !props.noScale ? (props.active ? `
        transform: scale(1.2);
    `: `
        transform: scale(0.9);
    `) : 'transform: scale(1.0);'
    }

    ${props => !props.noOpacity ? (props.active ? `
        opacity: 1;
    `: `
        opacity: 0.5;
    `) : 'opacity: 1.0;'
    }

    * {
        width: 100%;
        height: 100%;
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