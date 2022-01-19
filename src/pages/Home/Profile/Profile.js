import {
    BlockContainer,
    BlockFlex,
    ProfileBackground,
    VideoBg,
    BlockImage,

    ProfileContainer,
    ProfileFlex,
    ProfileImage,
    ProfileIcon,
    ProfileImageContainer,
    ProfileDetailContainer,
    ProfileDetail,
    TshirtDesignContainer,

    ContractFilesContainer,
    ContractFileLink,
    ContractFileIcon,

    TshirtDiv,
    TshirtImage,
    TshirtButtonContainer,
} from './Profile.styled';
import { Button } from '../../../styles/Button.styled';

const Profile = () => {
    return (
        <BlockContainer>
            <ProfileBackground>
                <VideoBg autoPlay logo muted src='./videos/video.mp4' type='video/mp4' />
            </ProfileBackground>
            <BlockFlex>
                <ProfileContainer>
                    <ProfileFlex>
                        <ProfileImageContainer>
                            {/* <ProfileImage src='./images/team_logo.png' /> */}
                            <ProfileIcon />
                        </ProfileImageContainer>
                        <ProfileDetailContainer>
                            <ProfileDetail>
                                Laenofi aoefaiom ksnviok fod  asfoe kfafoef kmd af oa
                                asdfo feaklf as. aewofm dkla faoaid
                                adfonai efoawkf doai f.
                                asnfoawiejfo jaiosf oaefmo kamdo faief
                                Laenofi aoefaiom ksnviok fod  asfoe kfafoef kmd af oa
                                asdfo feaklf as. aewofm dkla faoaid
                                adfonai efoawkf doai f.
                                asnfoawiejfo jaiosf oaefmo kamdo faief
                            </ProfileDetail>
                        </ProfileDetailContainer>
                    </ProfileFlex>
                    <ContractFilesContainer>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#9ACDD9" offset="0%" />
                                <stop stopColor="#fff" offset="100%" />
                            </linearGradient>
                        </svg>

                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                        <ContractFileLink>
                            <ContractFileIcon />
                        </ContractFileLink>
                    </ContractFilesContainer>
                </ProfileContainer>
                <TshirtDesignContainer>
                    <TshirtDiv>
                        <TshirtImage>
                            <img src={`./images/uniform.jpg`} alt="uniform" />
                        </TshirtImage>
                        <TshirtButtonContainer>
                            <Button>Learn More</Button>
                        </TshirtButtonContainer>
                    </TshirtDiv>
                </TshirtDesignContainer>
            </BlockFlex>
        </BlockContainer>
    )
}

export default Profile
