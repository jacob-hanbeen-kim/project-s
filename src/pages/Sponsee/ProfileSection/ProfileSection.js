import {
    ProfileContainer,
    Section,
    ContentContainer,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    SupportContainer
} from './ProfileSection.styled';

import Sidebar from '../StickySidebar';
import { ImageMap } from '../../../components';

const ProfileSection = () => {
    return (
        <ProfileContainer>
            <Sidebar items={["About Me", "From"]} />
            <ContentContainer>
                <Section>
                    <TextWrapper>
                        <Heading>About Me</Heading>
                        <TopLine>Life Story</TopLine>
                        <p>
                            Sdfomaw iofm oasmfoiamofmSOI dmoae foinzoinf oNEfono FONOISNf oNEfoi nSDOfn ESOIFn oSNfoi NE foiNSOIfn OISNEfo nsofnaoienfoiasnfkanmo rnvbnbuno SDF OISnfio af.
                        </p>
                    </TextWrapper>
                    <ImgWrap>
                        <Img src='images/account/background.jpeg' />
                    </ImgWrap>
                </Section>
                <Section></Section>
            </ContentContainer>
            <SupportContainer>
                <Section>
                    {/* <TextWrapper> */}
                    <TopLine>Add Your Logo</TopLine>
                    {/* </TextWrapper> */}
                    <ImgWrap>
                        <ImageMap
                            image='images/account/uniform_template.png'
                        />
                    </ImgWrap>
                </Section>
            </SupportContainer>
        </ProfileContainer>
    )
}

export default ProfileSection
