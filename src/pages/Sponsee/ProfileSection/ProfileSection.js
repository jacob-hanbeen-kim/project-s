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
            <Sidebar items={["Bio", "Something"]} />
            <ContentContainer>
                <Section>
                    <TextWrapper>
                        <Heading>User Story</Heading>
                        <TopLine>Something</TopLine>
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
                    <TopLine>Add Your Logo</TopLine>
                    <ImgWrap>
                        <ImageMap image='images/account/uniform_template.png'>
                            <area alt="chest" title="chest" href="chest" coords="74,90,151,121" shape="rect" />
                            <area alt="lowerback" title="lowerback" href="lowerback" coords="302,180,371,157" shape="rect" />
                            <area alt="rightchest" title="rightchest" href="rightchest" coords="84,75,12" shape="circle" />
                            <area alt="leftchest" title="leftchest" href="leftchest" coords="141,74,12" shape="circle" />
                            <area alt="back" title="back" href="back" coords="302,83,370,153" shape="rect" />
                            <area alt="upperback" title="upperback" href="upperback" coords="301,57,371,79" shape="rect" />
                            <area alt="rightleg" title="rightleg" href="rightleg" coords="59,376,12" shape="circle" />
                            <area alt="leftleg" title="leftleg" href="leftleg" coords="157,376,12" shape="circle" />
                            <area alt="shoulder" title="shoulder" href="shoulder" coords="552,120,508,85" shape="rect" />
                            <area alt="sleeve" title="sleeve" href="sleeve" coords="512,131,551,146" shape="rect" />
                            <area alt="neckline" title="neckline" href="neckline" coords="316,33,357,42" shape="rect" />
                        </ImageMap>
                    </ImgWrap>
                </Section>
            </SupportContainer>
        </ProfileContainer>
    )
}

export default ProfileSection
