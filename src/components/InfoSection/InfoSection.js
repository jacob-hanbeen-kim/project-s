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
    theme,
    id,
    imgStart,
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    primary,
}) => {
    return (
        <>
            <InfoContainer selectedTheme={theme} id={id}>
                <InfoWrapper>
                    <InfoRow hasImage={img ? true : false} imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine selectedTheme={theme}>{topLine}</TopLine>
                                <Heading selectedTheme={theme}>{headline}</Heading>
                                <Subtitle selectedTheme={theme}>{description}</Subtitle>
                                <BtnWrapper>
                                    <Button
                                        to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={theme}
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
