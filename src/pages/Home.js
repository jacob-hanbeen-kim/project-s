import { Container } from '../styles/Container.styled'
import {
    HomeContainer,
    ProfileContainer,
    Profile,
    ProfileImage,
    SponsorContainer,
    ContractFilesContainer,
    ContractFileLink,
    ContractFileIcon,
} from './Home.styled';
import { Flex } from '../styles/Flex.styled'

import content from '../content';
import Card from '../components/Card'

const Home = () => {
    return (
        <Container>
            <HomeContainer>
                <ProfileContainer>
                    <Profile>
                        <ProfileImage src='./images/logo192_dark.svg' />
                        <p>
                            Laenofi aoefaiom ksnviok fod  asfoe kfafoef kmd af oa
                            asdfo feaklf as. aewofm dkla faoaid
                            adfonai efoawkf doai f.
                            asnfoawiejfo jaiosf oaefmo kamdo faief
                            Laenofi aoefaiom ksnviok fod  asfoe kfafoef kmd af oa
                            asdfo feaklf as. aewofm dkla faoaid
                            adfonai efoawkf doai f.
                            asnfoawiejfo jaiosf oaefmo kamdo faief
                        </p>
                    </Profile>
                    <ContractFilesContainer>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                    </ContractFilesContainer>
                </ProfileContainer>
                <SponsorContainer>
                    {content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </SponsorContainer>
            </HomeContainer>
        </Container >
    )
}

export default Home
