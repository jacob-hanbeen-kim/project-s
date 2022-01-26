import styled from 'styled-components';


export const StyledCarousel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-align: center;

    max-width: 880px;
    width: 100%;
`

export const CarouselContainer = styled.div`
    height: 100%;
    width: 100%; 
    display: block;
`
export const SlickSlider = styled.div`
    margin: 0px 40px;

    position: relative;
    display: block;
    box-sizing: border-box;
    height: auto;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    direction: ltr;
    unicode-bidi: isolate;
`

export const ButtonSlider = styled.button`
    left: ${({ direction }) => direction == 'left' ? '-17px' : 'none'};
    right: ${({ direction }) => direction == 'right' ? '-17px' : 'none'};
    /* top: 185px; */
    top: 62.5%;

    position: absolute;
    z-index: 1;
    border-radius: 50%;

    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 232, 235);
    color: rgb(112, 122, 131);

    appearance: button;
    cursor: pointer;
    font: inherit;
    margin: 0px;
`

export const SlickList = styled.div`
    overflow: hidden;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    display: block;
    margin: 0px;
    padding: 0px;
`

export const SlickTrack = styled.div`
    /* width: 10400px; */
    width: 4000px;
    opacity: 1;
    transform: translate3d(-800px, 0px, 0px);

    position: relative;
    top: 0px;
    left: 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const SlickSlide = styled.div`
    outline: none;
    width: 400px;

    visibility: visible;
    opacity: 1;
    transition: visibility 0s ease 0s, opacity 500ms ease 0s;

    display: block;
    float: left;
    height: 100%;
    min-height: 1px;
`

export const SlickDots = styled.ul`
    display: block;
    position: absolute;
    bottom: -32px;
    width: 100%;
    padding: 0px;
    margin: 0px;
    list-style: none;
    text-align: center;

    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */

    li {
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0px 5px;
        padding: 0px;
        cursor: pointer;

        list-style-type: none;
    }

    li > button {
        font-size: 0px;
        line-height: 0;
        display: block;
        width: 20px;
        height: 20px;
        padding: 5px;
        cursor: pointer;
        color: transparent;
        border: 0px;
        outline: none;
        background: transparent;

        appearance: button;
        font: inherit;
        margin: 0px;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        text-align: center;
        align-items: flex-start;
    }

    li > button:before {
        font-family: slick;
        font-size: 30px;
        line-height: 20px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 20px;
        height: 20px;
        content: "•";
        text-align: center;
        -webkit-font-smoothing: antialiased;
        color: rgb(32, 129, 226);
        opacity: 0.75;
        // opacity: 0.25; -- inactive
    }
`



export const CarouselCard = styled.div`
    /* margin-bottom: 10px; */

    display: inline-block;
    width: 100%;
    padding: 0px 10px 10px;
    margin-top: 48px;
    position: relative;

    & > a {
        display: inline-block;
        border: 1px solid rgb(229, 232, 235);
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        cursor: pointer;
        width: 100%;

        position: relative;
        color: rgb(32, 129, 226);
        text-decoration: none;
    }
`

export const CarouselCardImage = styled.div`
    height: 380px;
    /* width: 100px; */

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: 1px solid rgb(229, 232, 235);
    
    background-color: rgb(229, 232, 235);

    img {
        object-fit: cover;
        height: 100%;
        transition: opacity 400ms ease 0s;
        width: 100%;
        display: block;
    }
`

export const CarouselCardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    margin-top: -36px;
`