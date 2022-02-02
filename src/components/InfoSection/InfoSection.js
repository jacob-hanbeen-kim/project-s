import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrapper,

    ImgWrap,
    Img
} from './InfoSection.styled'
import {
    Button
} from '../../styles/Button.styled'

const InfoSection = ({
    id,
    imgStart,
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    invert
}) => {
    return (
        <>
            <InfoContainer invert={invert} id={id}>
                <InfoWrapper>
                    <InfoRow hasImage={img ? true : false} imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine invert={invert}>{topLine}</TopLine>
                                <Heading invert={invert}>{headline}</Heading>
                                <Subtitle invert={invert}>{description}</Subtitle>
                                <BtnWrapper>
                                    <Button
                                        to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        invert={invert}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        {img &&
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Column2>
                        }
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
