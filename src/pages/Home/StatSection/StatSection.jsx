import {
    Container,
    ContentContainer,
    TextWrapper,
    SideNote
} from './StatSection.styled'
import { Text } from '../../../components'

const StatSection = () => {
    return (
        <Container>
            <ContentContainer>
                <TextWrapper>
                    <Text variant='h2'>
                        Close your deal <span>87</span>% faster with DEFIACT*
                    </Text>
                </TextWrapper>
                <SideNote>
                    <Text variant='caption'>
                        *as tested in alpha
                    </Text>
                </SideNote>
            </ContentContainer>
        </Container>
    )
}

export default StatSection