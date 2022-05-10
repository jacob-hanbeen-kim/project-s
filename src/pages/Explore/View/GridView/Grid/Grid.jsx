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

const Grid = ({
    userInfo
}) => {

    const getName = () => {
        if (userInfo.firstName) {
            return `${userInfo.firstName} ${userInfo.lastName}`;
        } else {
            return userInfo.agencyName;
        }

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
                        <Name>{getName()}</Name>
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