import {
    Container,
    Wrapper,
    ImageWrapper,
    ContentWrapper,
    MediaWrapper,
    InfoWrapper,
    ActionItemsWrapper,
    ProfileImgWrapper,
    SocialMediaWrapper,
    SocialWrapper,
    Follower,
    Metrics
} from './HeroSection.styled'
import { ProfileImg, SocialIcon, Text, MediaScoreIcon, Icons } from '../../../components';
import { Button } from '../../../styles/Button.styled';

const HeroSection = ({ currentAccount, username, profileImg, profileBg }) => {
    return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <img src={process.env.PUBLIC_URL + '/images/account/background.jpeg'} alt="" />
                </ImageWrapper>
                <ContentWrapper>
                    <MediaWrapper>
                        <ProfileImgWrapper>
                            <ProfileImg
                                hasProfileImg={true}
                                size='10rem'
                                src={profileImg}
                                hasBorder={true}
                                borderSize='5px'
                                borderColor='white'
                            />
                        </ProfileImgWrapper>
                        <SocialMediaWrapper>
                            <SocialWrapper>
                                <SocialIcon media='facebook' size='1.5rem' fontSize='1rem' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='instagram' size='1.5rem' fontSize='1rem' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='twitter' size='1.5rem' fontSize='1rem' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='linkedin' size='1.5rem' fontSize='1rem' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                        </SocialMediaWrapper>
                    </MediaWrapper>
                    <InfoWrapper>
                        <Text variant='h3'>Defiact</Text>
                        <Metrics>
                            <MediaScoreIcon size='21px' />
                            <p>1,507</p>
                        </Metrics>
                        <Metrics>
                            <Icons icon='location' size='21px' />
                            <p>Atlanta, GA</p>
                        </Metrics>
                        <Text variant='body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.
                        </Text>
                    </InfoWrapper>
                    <ActionItemsWrapper>
                        <Button>Follow</Button>
                    </ActionItemsWrapper>
                </ContentWrapper>
            </Wrapper>
        </Container>
    )
}

export default HeroSection