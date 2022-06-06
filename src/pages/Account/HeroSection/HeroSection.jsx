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
    MetricWrapper,
    Metrics,
    TopLine,
    Name,
    TagWrapper,
    VerticalLine,
    BtnText
} from './HeroSection.styled'
import { ProfileImg, SocialIcon, Text, MediaScoreIcon, Icons } from '../../../components';
import { Button } from '../../../styles/Button.styled';
import { FaRegCommentDots, FaUserAlt } from 'react-icons/fa'
import Tag from './Tag/Tag';

const HeroSection = ({ user, profileImg, profileBg }) => {
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
                                size='20vw'
                                maxSize='230px'
                                minSize='130px'
                                src={profileImg}
                                hasBorder={true}
                                borderSize='0.6rem'
                                borderColor='white'
                            />
                        </ProfileImgWrapper>
                        <SocialMediaWrapper>
                            <SocialWrapper>
                                <SocialIcon media='facebook' size='2.3vw' fontSize='1.5vw' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='instagram' size='2.3vw' fontSize='1.5vw' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='twitter' size='2.3vw' fontSize='1.5vw' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='linkedin' size='2.3vw' fontSize='1.5vw' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                        </SocialMediaWrapper>
                    </MediaWrapper>
                    <InfoWrapper>
                        <TopLine>
                            <Name>{`${user?.firstName} ${user?.lastName}`}</Name>
                            <TagWrapper>
                                <Tag text='Team' />
                                <Tag text='League' />
                                <VerticalLine />
                                <Tag text='Sports' />
                            </TagWrapper>
                        </TopLine>
                        <MetricWrapper>
                            <Metrics>
                                <MediaScoreIcon size='1.8em' />
                                <p>1,507</p>
                            </Metrics>
                            <Metrics>
                                <Icons icon='location' size='1.8em' />
                                <p>Atlanta, GA</p>
                            </Metrics>
                        </MetricWrapper>
                        <Text variant='body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.
                        </Text>
                    </InfoWrapper>
                    <ActionItemsWrapper>
                        <Button
                            height='2em'
                            fontSize='0.8em'
                            padding='15px 10px'
                        >
                            <FaRegCommentDots />
                            <BtnText>Message</BtnText>
                        </Button>
                        <Button
                            height='2em'
                            fontSize='0.8em'
                            padding='15px 10px'
                        >
                            <FaUserAlt />
                            <BtnText>Follow</BtnText>
                        </Button>
                    </ActionItemsWrapper>
                </ContentWrapper>
            </Wrapper>
        </Container>
    )
}

export default HeroSection