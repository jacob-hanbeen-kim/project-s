import {
    ProfileContainer,
    ProfileWrapper,
    Row,
    Column,

    TextWrapper,
    TopLine,
    Heading,
    Details,
    BtnWrapper,

    ImgWrap,
    Img,
    ImgDivider
} from './Profile.styled';
import { Button } from '../../../styles/Button.styled';
import { ImageBackground, InfoSection, ProfileImg, AccountTag } from '../../../components';

const Profile = ({ currentAccount, theme }) => {

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
                    {/* <Column gridArea='col2'> */}
                    {/* <ImgWrap> */}
                    {/* <Img src='./images/account/background.jpeg' alt='alt' /> */}
                    {/* <ImgDivider>
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"></path>
                                </svg>
                            </ImgDivider> */}
                    {/* </ImgWrap> */}
                    {/* </Column> */}
                </Row>
            </ProfileWrapper>
        </ProfileContainer >
    )
}

export default Profile
