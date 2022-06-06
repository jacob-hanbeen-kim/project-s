import {
    ProfileContainer,
    Section,
    ContentContainer
} from './ProfileSection.styled';

const ProfileSection = ({ username }) => {
    return (
        <ProfileContainer>
            <ContentContainer>
                <Section>
                    <h1>{username && username.toUpperCase()}</h1>
                    <h2>TopLine</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <video src={process.env.PUBLIC_URL + `/videos/account/${username}/video.mp4`} autoPlay muted type='video/mp4' />
                    <h2>TopLine</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <img src={process.env.PUBLIC_URL + `/images/account/${username}/image1.jpeg`} alt='img1'/>
                    <h2>TopLine</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui.
                    </p>
                    <img src={process.env.PUBLIC_URL + `/images/account/${username}/image2.jpeg`} alt='img2'/>
                </Section>
                <Section></Section>
            </ContentContainer>
            {/* <SupportContainer>
            </SupportContainer> */}
        </ProfileContainer>
    )
}

export default ProfileSection
