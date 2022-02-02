import {
    HeroContainer,
    HeroWrapper,
    HeroFlex,
    Row,
    Column,

    TextWrapper,
    TopLine,
    Details,
} from './HeroSection.styled';
import { Button } from '../../../styles/Button.styled';
import { ImageBackground, ProfileImg, AccountTag, MembershipStatus } from '../../../components';

const HeroSection = ({ currentAccount }) => {

    return (
        <HeroContainer>
            <ImageBackground src='./images/account/background.jpeg' />
            <HeroWrapper>
                <Row>
                    <Column gridArea='col1'>
                        <HeroFlex>
                            <TextWrapper>
                                <ProfileImg hasProfileImg={true} size='10rem' />
                            </TextWrapper>
                            <TextWrapper>
                                <TopLine>Your Name</TopLine>
                                <AccountTag account={currentAccount} />
                                {/* <MembershipStatus size='1.5rem'> Membership Status : </MembershipStatus> */}
                            </TextWrapper>
                        </HeroFlex>
                    </Column>
                    <Column gridArea='col2'>
                        <TextWrapper>
                            <Details>
                                My name is Uofin ewoif iosdfajeo. I am fiodf oweijios foaij ofjao ijfo joifjoiaw ejofij aojdfsfafwefa. Difwio do faeio mfaoweif oskfm oaweifnoaiwnfiansfaok.
                            </Details>
                        </TextWrapper>
                    </Column>
                </Row>
            </HeroWrapper>
        </HeroContainer >
    )
}

export default HeroSection
