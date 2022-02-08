import {
    Container,
    Flex,
    Content,
    Icon,
    Text
} from './Tag.styled';


const Tag = ({ icon, children }) => {
    return (
        <Container>
            <Flex>
                <Content>
                    {
                        icon &&
                        <Icon loading="lazy">
                            icon
                        </Icon>
                    }
                    <Text>
                        Save {children}
                    </Text>
                </Content>
            </Flex>
        </Container>
    )
}

export default Tag
