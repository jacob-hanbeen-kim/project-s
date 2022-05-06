import {
    Container,
    Wrapper,
    ProfilePhoto,
    ProfileContent,
    ProfileImgContainer,
    ProfileIcon,
    Title,
    Name,
    Category,
    Tag,
    DetailContainer,
    Details,
    SocialMedia
} from './Grid.styled';
import { SocialIcons } from '../../../../../components';

const Grid = ({
    userInfo
}) => {

    const getName = () => {
        if (userInfo.firstName) {
            return userInfo.firstName + userInfo.lastName
        } else {
            return userInfo.agencyName
        }

    }
    return (
        <Container>
            <Wrapper>
                <ProfilePhoto>
                    {/* <ProfileImgContainer> */}
                    <ProfileIcon></ProfileIcon>
                    {/* </ProfileImgContainer> */}
                </ProfilePhoto>
                <ProfileContent>
                    <Title>
                        <Name>{getName()}</Name>
                        <Category>

                        </Category>
                    </Title>
                    <Tag>
                        {userInfo.sport}
                    </Tag>
                    <DetailContainer>
                        <Details>
                            <p>{userInfo.age} years old</p>
                            <p>{userInfo.location}</p>
                            <p>{userInfo.mediaScore}</p>
                        </Details>
                        <SocialMedia>
                            <SocialIcons />
                        </SocialMedia>
                    </DetailContainer>
                </ProfileContent>
            </Wrapper>
        </Container>
    )
}

export default Grid