import { Container } from '../styles/Container.styled'
import content from '../content';
import Card from '../components/Card'

const Home = () => {
    return (
        <Container>
            {content.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </Container>
    )
}

export default Home
