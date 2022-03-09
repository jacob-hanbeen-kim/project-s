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
`

export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 20px;
`

export const CarouselItem = styled.div`
    
`

export const LeftButton = styled(BsChevronLeft)`
    font-size: 40px;
    margin-right: 10px;
`

export const RightButton = styled(BsChevronRight)`
    font-size: 40px;
    margin-left: 10px;
`