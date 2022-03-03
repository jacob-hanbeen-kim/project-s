import {
    AnimationBox,
    StyledMousePointer,
    MousePointerBg
} from './AnimatedMousePointer.styled'

const AnimatedMousePointer = ({ startX, startY, destX, destY, duration }) => {
    return (
        <>
            <AnimationBox startX={startX} startY={startY} destX={destX} destY={destY} duration={duration}>
                <StyledMousePointer />
                {/* <MousePointerBg /> */}
            </AnimationBox>
        </>
    )
}

export default AnimatedMousePointer