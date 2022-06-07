import {
    Container,
    Wrapper,
    ProfilePhoto,
    ProfileContent,
    LikeBtn,
    HeartIcon,
    ProfileImgContainer,
    ProfileIcon,
    Title,
    Name,
    Category,
    CategoryWrapper,
    Tag,
    DetailContainer,
    Details,
    DetailWrapper,
    DetailText,
    DetailIcon,
    LocationIcon,
    SocialMedia,
    SocialWrapper,
    Follower
} from './Grid.styled';
import { SocialIcon, SportIcon } from '../../../../../components';
import { useNavigate } from 'react-router-dom';

const Grid = ({ userInfo }) => {

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/account/${userInfo.id}`);
    }

    return (
        <Container>
            <Wrapper>
                <ProfilePhoto>
                    {/* <ProfileImgContainer> / */}
                    <ProfileIcon />
                    <LikeBtn>
                        <HeartIcon liked="true" />
                    </LikeBtn>
                </ProfilePhoto>
                <ProfileContent>
                    <Title>
                        <Name onClick={handleOnClick}>{`${userInfo.firstName} ${userInfo.lastName}`}</Name>
                        <Category>
                            {userInfo.sport &&
                                <CategoryWrapper>
                                    <SportIcon sport={userInfo.sport} />
                                </CategoryWrapper>
                            }
                            <CategoryWrapper>
                                <SportIcon sport='basketball' />
                            </CategoryWrapper>
                        </Category>
                    </Title>
                    <Tag>
                        {userInfo.sport}
                    </Tag>
                    <DetailContainer>
                        <Details>
                            <DetailWrapper>
                                <DetailText>{userInfo.age} years old</DetailText>
                            </DetailWrapper>
                            <DetailWrapper>
                                <DetailIcon><LocationIcon /></DetailIcon>
                                <DetailText>{userInfo.location}</DetailText>
                            </DetailWrapper>
                            <DetailWrapper>
                                <DetailIcon>
                                    <img src={process.env.PUBLIC_URL + '/images/account/marketScore.svg'} />
                                </DetailIcon>
                                <DetailText>{userInfo.mediaScore}</DetailText>
                            </DetailWrapper>
                        </Details>
                        <SocialMedia>
                            <SocialWrapper>
                                <SocialIcon media='facebook' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='instagram' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='twitter' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                            <SocialWrapper>
                                <SocialIcon media='linkedin' />
                                <Follower>28.3 M</Follower>
                            </SocialWrapper>
                        </SocialMedia>
                    </DetailContainer>
                </ProfileContent>
            </Wrapper>
        </Container>
    )
}

export default Grid