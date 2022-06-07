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
import { ImageMap, Card } from '../../../../components';
import { useEffect, useState } from 'react';
import ProfileService from '../../../../services/profile-services';

const ProfileSection = ({ user }) => {

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        ProfileService.getProfileById(user.id).then((res) => {
            console.log('profilehtml', res)
            setProfile(res.description);
        })
    }, [])

    return (
        <ProfileContainer>
            {/* <Sidebar items={["Bio", "Something"]} /> */}
            <ContentContainer>
                <Section>
                    <div dangerouslySetInnerHTML={{ __html: profile }} />
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

                    <Card title="Packge 5" details="Includes Followings" buttonTxt="Offer">
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
