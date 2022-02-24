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
import { Button } from '../../styles/Button.styled'
import { Text } from '../';

const InfoSection = ({
    id,
    imgStart,
    subtitle,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    invert,
    onClick,
    children
}) => {
    return (
        <InfoContainer invert={invert} id={id}>
            <InfoWrapper>
                <InfoRow hasImage={img ? true : false} imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            {headline && <Text variant='display2' invert={invert}>{headline}</Text>}
                            {subtitle && <Text variant='h2' transform='uppercase'>{subtitle}</Text>}
                            {description && <Text variant='body'>{description}</Text>}
                            {buttonLabel &&
                                <BtnWrapper>
                                    <Button onClick={onClick}>
                                        {buttonLabel}
                                    </Button>
                                </BtnWrapper>
                            }
                        </TextWrapper>
                    </Column1>
                    {img &&
                        <Column2>
                            <ImgWrap>
                                <Img src={process.env.PUBLIC_URL + img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    }
                    {children && <Column2>{children}</Column2>}
                </InfoRow>
            </InfoWrapper>
        </InfoContainer >
    )
}

export default InfoSection
