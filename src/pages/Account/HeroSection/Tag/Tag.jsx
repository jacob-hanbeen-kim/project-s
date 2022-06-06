import {
    Container,
    Text,
    Image
} from './Tag.styled'

const Tag = ({ img, text }) => {
    return (
        <Container>
            {img ?
                <Image src={img} /> :
                <Text>{text}</Text>
            }
        </Container>
    )
}

export default Tag