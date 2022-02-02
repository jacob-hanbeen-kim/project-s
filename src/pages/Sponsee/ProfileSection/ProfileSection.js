import {
    ProfileContainer,
    ProfileWrapper,
    ProfileFlex,
    Row,
    Column,

    TextWrapper,
    TopLine,
    Details,
} from './ProfileSection.styled';
import { Button } from '../../../styles/Button.styled';
import { ImageBackground, ProfileImg, AccountTag } from '../../../components';

const ProfileSection = ({ currentAccount }) => {

    return (
        <ProfileContainer>
            <ImageBackground src='./images/account/background.jpeg' />
            <ProfileWrapper>
                <Row>
                    <Column gridArea='col1'>
                        <ProfileFlex>
                            <TextWrapper>
                                <ProfileImg hasProfileImg={true} size='10rem' />
                            </TextWrapper>
                            <TextWrapper>
                                <TopLine>Your Name</TopLine>
                                <AccountTag account={currentAccount} />
                            </TextWrapper>
                        </ProfileFlex>
                    </Column>
                    <Column gridArea='col2'>
                        <TextWrapper>
                            <Details>
                                My name is Uofin ewoif iosdfajeo. I am fiodf oweijios foaij ofjao ijfo joifjoiaw ejofij aojdfsfafwefa. Difwio do faeio mfaoweif oskfm oaweifnoaiwnfiansfaok.
                            </Details>
                        </TextWrapper>
                    </Column>
                </Row>
            </ProfileWrapper>
        </ProfileContainer >
    )
}

export default ProfileSection
