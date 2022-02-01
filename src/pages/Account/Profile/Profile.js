import {
    ProfileContainer,
    ProfileWrapper,
    Row,
    Column,

    TextWrapper,
    TopLine,
    Details,
    BtnWrapper,
} from './Profile.styled';
import { Button } from '../../../styles/Button.styled';
import { ImageBackground, ProfileImg, AccountTag } from '../../../components';

const Profile = ({ currentAccount }) => {

    return (
        <ProfileContainer>
            <ImageBackground src='./images/account/background.jpeg' />
            <ProfileWrapper>
                <Row>
                    <Column gridArea='col1'>
                        <TextWrapper>
                            <ProfileImg hasProfileImg={true} size='10rem' />
                            <TopLine>Your Name</TopLine>
                            <AccountTag account={currentAccount} />
                            <Details>
                                My name is Uofin ewoif iosdfajeo. I am fiodf oweijios foaij ofjao ijfo joifjoiaw ejofij aojdfsfafwefa. Difwio do faeio mfaoweif oskfm oaweifnoaiwnfiansfaok.
                            </Details>
                            <BtnWrapper>
                                <Button dark={false} style={{ zIndex: 1 }}>
                                    Learn More
                                </Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column>
                </Row>
            </ProfileWrapper>
        </ProfileContainer >
    )
}

export default Profile
