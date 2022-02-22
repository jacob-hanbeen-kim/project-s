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
    SupportContainer,
    SupportSticky
} from './ProfileSection.styled';

import Sidebar from '../StickySidebar';
import { ImageMap, Card } from '../../../components';

const ProfileSection = () => {
    return (
        <ProfileContainer>
            {/* <Sidebar items={["Bio", "Something"]} /> */}
            <ContentContainer>
                <Section>
                    <TextWrapper>
                        <Heading>User Bio</Heading>
                        <TopLine>Something</TopLine>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </TextWrapper>
                    <ImgWrap>
                        <Img src={process.env.PUBLIC_URL + '/images/account/background.jpeg'} />
                    </ImgWrap>
                    <TextWrapper>
                        <Heading>User Bio</Heading>
                        <TopLine>Something</TopLine>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Nisl purus in mollis nunc sed. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Ac tincidunt vitae semper quis lectus. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Gravida arcu ac tortor dignissim convallis. Consequat interdum varius sit amet mattis vulputate enim. Diam maecenas sed enim ut sem. Nisl purus in mollis nunc sed id semper risus in. Semper eget duis at tellus at urna condimentum. Auctor augue mauris augue neque gravida in fermentum et. Risus pretium quam vulputate dignissim suspendisse in. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Non nisi est sit amet facilisis magna. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </p>
                        <p>
                            Volutpat sed cras ornare arcu dui vivamus arcu felis. Consequat interdum varius sit amet. Feugiat nisl pretium fusce id velit ut tortor. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Hac habitasse platea dictumst vestibulum rhoncus. Morbi leo urna molestie at elementum eu. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Nisi vitae suscipit tellus mauris a diam maecenas sed. Blandit cursus risus at ultrices mi tempus imperdiet. Iaculis eu non diam phasellus vestibulum lorem sed.
                        </p>
                    </TextWrapper>
                    <ImgWrap>
                        <Img src={process.env.PUBLIC_URL + '/images/account/background.jpeg'} />
                    </ImgWrap>
                </Section>
            </ContentContainer>
            <SupportContainer>
                <SupportSticky>
                    {/* <TopLine>Add Your Logo</TopLine>
                    <ImageMap image={process.env.PUBLIC_URL + '/images/account/uniform_template.png'}>
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
                    </ImageMap> */}

                    <Card title="Packge 1" details="Includes Followings" buttonTxt="Offer">
                        <ul>
                            <li>Metion in Sns</li>
                            <li>Participate in 1 event</li>
                        </ul>
                    </Card>

                    <Card title="Packge 2" details="Includes Followings" buttonTxt="Offer">
                        <ul>
                            <li>Metion in Sns</li>
                            <li>Participate in 1 event</li>
                        </ul>
                    </Card>

                    <Card title="Packge 3" details="Includes Followings" buttonTxt="Offer">
                        <ul>
                            <li>Metion in Sns</li>
                            <li>Participate in 1 event</li>
                        </ul>
                    </Card>

                    <Card title="Packge 4" details="Includes Followings" buttonTxt="Offer">
                        <ul>
                            <li>Metion in Sns</li>
                            <li>Participate in 1 event</li>
                        </ul>
                    </Card>
                </SupportSticky>
            </SupportContainer>
        </ProfileContainer>
    )
}

export default ProfileSection
