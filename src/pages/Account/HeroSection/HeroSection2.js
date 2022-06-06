import {
    HeroContainer,
    HeroWrapper,
    HeroContent,

    ProfileInfoWrapper,
    ProfileInfoFlex,

    BioWrapper,

    TextWrapper,
    TopLine,
    Details,

    VerticalLine,
    TagContainer,
    TagWrapper,
    Img,

    SponsorList,
    SponsorItem
} from './HeroSection.styled';
import { Button } from '../../../styles/Button.styled';
import { ImageBackground, ProfileImg, AccountTag, MembershipStatus } from '../../../components';

import { FaRegLifeRing } from 'react-icons/fa';

const HeroSection = ({ currentAccount, username, profileImg, profileBg }) => {

    console.log(profileBg);
    return (
        <HeroContainer>
            {/* <ImageBackground src={profileBg} opacity={0.6} /> */}
            <HeroWrapper>
                <HeroContent>
                    <ProfileInfoWrapper>
                        <ProfileInfoFlex>
                            <TextWrapper>
                                <ProfileImg hasProfileImg={true} size='10rem' src={profileImg} />
                            </TextWrapper>
                            <TextWrapper>
                                <TopLine>{username}</TopLine>
                                <AccountTag account={currentAccount} />
                                {/* <MembershipStatus size='1.5rem'> Membership Status : </MembershipStatus> */}
                            </TextWrapper>
                        </ProfileInfoFlex>
                    </ProfileInfoWrapper>
                    <BioWrapper>
                        <TagWrapper>
                            <TagContainer isLeft={true}>
                                <Img src={process.env.PUBLIC_URL + '/images/account/tottenham_logo.png'} />
                                <Img src={process.env.PUBLIC_URL + '/images/account/fifa_logo.png'} />
                            </TagContainer>
                            <VerticalLine />
                            <TagContainer isLeft={false}>
                                <Img src={process.env.PUBLIC_URL + '/images/account/soccer_ball.png'} />
                            </TagContainer>
                        </TagWrapper>
                        <TextWrapper>
                            <Details>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.
                            </Details>
                        </TextWrapper>
                    </BioWrapper>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer >
    )
}

export default HeroSection
