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

const HeroSection = ({ currentAccount, username }) => {


    return (
        <HeroContainer>
            {
                username ?
                    <ImageBackground src={process.env.PUBLIC_URL + `/images/account/${username}/background.jpeg`} opacity={0.6} /> :
                    <ImageBackground src={process.env.PUBLIC_URL + `/images/account/background.jpeg`} />
            }
            <HeroWrapper>
                <HeroContent>
                    <ProfileInfoWrapper>
                        <ProfileInfoFlex>
                            <TextWrapper>
                                {
                                    username ?
                                        <ProfileImg hasProfileImg={true} size='10rem' src={process.env.PUBLIC_URL + `/images/account/${username}/profileImg.png`} /> :
                                        <ProfileImg hasProfileImg={true} size='10rem' src={process.env.PUBLIC_URL + '/images/login/profileImg.jpg'} />
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
