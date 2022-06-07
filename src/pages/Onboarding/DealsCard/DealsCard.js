import {
    Container,
    ContentContainer,
    Header,
    BtnWrapper,
    ImageContainer,
    ButtonItems
} from './DealsCard.styled';

const DealsCard = ({
    option,
    image
}) => {

    const onSelect = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <ContentContainer>
                <Header>{option}</Header>
            </ContentContainer>
            <ImageContainer>
                <img src={process.env.PUBLIC_URL + image} alt={option}/>
            </ImageContainer>
            <div>
                <BtnWrapper>
                    <ButtonItems onClick={onSelect}>
                        Select
                    </ButtonItems>
                </BtnWrapper>
            </div>
        </Container >
    )
}

export default DealsCard
