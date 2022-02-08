import {
    HeroContainer,
    HeroWrapper,
    HeroFlex,
    DetailFlex,
    Row,
    Column,

    TextWrapper,
    TopLine,
    Details,

    VerticalLine,
    TeamTag,
    SportsTag,
    TagWrapper,
    Img,

    SponsorList
} from './HeroSection.styled';
import { Button } from '../../../styles/Button.styled';
import { ImageBackground, ProfileImg, AccountTag, MembershipStatus } from '../../../components';

import { FaRegLifeRing } from 'react-icons/fa';

const HeroSection = ({ currentAccount }) => {

    return (
        <HeroContainer>
            <ImageBackground src='images/account/background.jpeg' />
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
                        <TagWrapper>
                            <TeamTag>
                                <Img src='images/account/tottenham_logo.png' />
                                <Img src='images/account/fifa_logo.png' />
                            </TeamTag>
                            <VerticalLine />
                            <SportsTag>
                                <Img src='images/account/soccer_ball.png' />
                            </SportsTag>
                        </TagWrapper>
                        <DetailFlex>
                            <TextWrapper>
                                <Details>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.
                                </Details>
                            </TextWrapper>
                        </DetailFlex>
                        <SponsorList>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                            <ProfileImg size={'4rem'}><FaRegLifeRing /></ProfileImg>
                        </SponsorList>
                    </Column>
                </Row>
            </HeroWrapper>
        </HeroContainer >
    )
}

export default HeroSection
