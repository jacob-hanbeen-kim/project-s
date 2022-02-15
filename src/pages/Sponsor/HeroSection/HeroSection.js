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
            <ImageBackground src={profileBg} opacity={0.6} />
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
                </HeroContent>
            </HeroWrapper>
        </HeroContainer >
    )
}

export default HeroSection
