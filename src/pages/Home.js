import { Container } from '../styles/Container.styled'
import {
    HomeContainer,
    BlockContainer,
    BlockFlex,
    BlockBackgroundImage,
    BlockImage,

    ProfileContainer,
    Profile,
    ProfileImage,
    ProfileImageContainer,
    ProfileDetailContainer,
    TshirtDesignContainer,
    TshirtImage,

    ContractFilesContainer,
    ContractFileLink,
    ContractFileIcon,

    ContractRequisitesSection,

} from './Home.styled';

import content from '../content';
import Card from '../components/Card'

const Home = () => {
    return (
        <HomeContainer>
            <>
                <BlockBackgroundImage>
                    <BlockImage>
                    </BlockImage>
                </BlockBackgroundImage>
                <BlockContainer>
                    <BlockFlex>
                        <ProfileContainer>
                            <Profile>
                                <ProfileImageContainer>
                                    <ProfileImage src='./images/team_logo.png' />
                                </ProfileImageContainer>
                                <ProfileDetailContainer>
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
                                </ProfileDetailContainer>
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
                                <ContractFileLink>
                                    <ContractFileIcon />
                                </ContractFileLink>
                                <ContractFileLink>
                                    <ContractFileIcon />
                                </ContractFileLink>
                            </ContractFilesContainer>
                        </ProfileContainer>
                        <TshirtDesignContainer>
                            <TshirtImage>
                                <img src={`./images/uniform.jpeg`} alt="uniform" />
                            </TshirtImage>
                        </TshirtDesignContainer>
                    </BlockFlex>
                </BlockContainer>
            </>
            <Container>
                <ContractRequisitesSection>
                    <h1>Sponsor Opportunities</h1>
                    {content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </ContractRequisitesSection>
            </Container>
        </HomeContainer>
    )
}

export default Home
