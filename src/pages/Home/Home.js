import { Container } from '../../styles/Container.styled'
import { Button } from '../../styles/Button.styled';
import Carousel from '../../components/Carousel';
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
    TshirtDiv,
    TshirtImage,
    TshirtButtonContainer,

    ContractFilesContainer,
    ContractFileLink,
    ContractFileIcon,

    ContractRequisitesSection,

} from './Home.styled';

import content from '../../content';
import Card from '../../components/Card'

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
                                <svg width="0" height="0">
                                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="#7a6ded" offset="0%" />
                                        <stop stopColor="#591885" offset="100%" />
                                    </linearGradient>
                                </svg>

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
                            <TshirtDiv>
                                <TshirtImage>
                                    <img src={`./images/uniform.jpg`} alt="uniform" />
                                </TshirtImage>
                                <TshirtButtonContainer>
                                    <Button>Learn More</Button>
                                </TshirtButtonContainer>
                            </TshirtDiv>
                        </TshirtDesignContainer>
                    </BlockFlex>
                </BlockContainer>
            </>
            <Container>
                <ContractRequisitesSection>
                    {/* <h1>Sponsor Opportunities</h1>
                    {content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))} */}
                    <Carousel child={
                        <>
                            <TshirtDiv>
                                <TshirtImage>
                                    <img src={`./images/uniform.jpg`} alt="uniform" />
                                </TshirtImage>
                                <TshirtButtonContainer>
                                    <Button>Learn More</Button>
                                </TshirtButtonContainer>
                            </TshirtDiv>
                            <TshirtDiv>
                                <TshirtImage>
                                    <img src={`./images/uniform.jpg`} alt="uniform" />
                                </TshirtImage>
                                <TshirtButtonContainer>
                                    <Button>Learn More</Button>
                                </TshirtButtonContainer>
                            </TshirtDiv>
                        </>
                    }>
                    </Carousel>
                </ContractRequisitesSection>
            </Container>
        </HomeContainer>
    )
}

export default Home
