import {
    ImgWrap,
    Img
} from './Image.styled'

const Image = ({
    src,
    alt
}) => {
    return (
        <ImgWrap>
            <Img src={src} alt={alt} />
        </ImgWrap>
    )
}

export default Image