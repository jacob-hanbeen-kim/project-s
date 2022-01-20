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

    ContractFilesContainer,
    ContractFileLink,
    ContractFileIcon,
} from './Profile.styled';
import Card2 from '../../../components/Card2';

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
                <Card2
                    image="./images/uniform.jpg"
                    // image="./images/brand_name.svg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                    color='white'
                    backgroundColor='#3f3f3f'
                />
            </BlockFlex>
        </BlockContainer>
    )
}

export default Profile
