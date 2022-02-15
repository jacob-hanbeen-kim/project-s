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


    return (
        <HeroContainer>
            {
                profileBg ?
                    <ImageBackground src={profileBg} opacity={0.6} /> :
                    <ImageBackground src={process.env.PUBLIC_URL + `/images/account/background.jpeg`} />
            }
            <HeroWrapper>
                <HeroContent>
                    <ProfileInfoWrapper>
                        <ProfileInfoFlex>
                            <TextWrapper>
                                {
                                    profileImg ?
                                        <ProfileImg hasProfileImg={true} size='10rem' src={profileImg} /> :
                                        <ProfileImg hasProfileImg={true} size='10rem' src={process.env.PUBLIC_URL + '/images/account/profileImg.png'} />
                                }
                            </TextWrapper>
                            <TextWrapper>
                                <TopLine>{username}</TopLine>
                                <AccountTag account={currentAccount} />
                                {/* <MembershipStatus size='1.5rem'> Membership Status : </MembershipStatus> */}
                            </TextWrapper>
                        </ProfileInfoFlex>
                    </ProfileInfoWrapper>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer >
    )
}

export default HeroSection
