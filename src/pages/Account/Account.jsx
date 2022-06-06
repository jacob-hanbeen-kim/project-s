import {
    Container
} from './Account.styled';

import Sponsee from './Sponsee/Sponsee';
import Sponsor from './Sponsor/Sponsor';
import HeroSection from './HeroSection/HeroSection';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
// import StorageService from '../../services/storage-service';
import UserService from '../../services/users-service';

const Account = () => {

    const { currentUser } = useAuth();
    const { accountId } = useParams();
    const navigate = useNavigate();

    const [profile, setProfile] = useState(null);
    const [userType, setUsertype] = useState(null);

    const [profileImg, setProfileImg] = useState(null);
    const [profileBg, setProfileBg] = useState(null);

    const getUserProfileImgs = async () => {
        // const img = await StorageService.getProfileImg(viewUser);
        // const bg = await StorageService.getProfileBg(viewUser);
        const img = process.env.PUBLIC_URL + `/images/account/${profile.id}/profileImg.png`;
        const bg = process.env.PUBLIC_URL + `/images/account/${profile.id}/background.png`;

        setProfileImg(img);
        setProfileBg(bg);
    }

    const displayProfilePage = () => {
        switch (userType) {
            case "sponsee":
                return <Sponsee user={profile} profileImg={profileImg} profileBg={profileBg} />;
            case "sponsor":
                return <Sponsor user={profile} profileImg={profileImg} profileBg={profileBg} />;
            case "agency":
                return <Sponsee user={profile} profileImg={profileImg} profileBg={profileBg} />;
            default: return <div>
                Page Not Found
            </div>
        }
    }

    const getUserProfile = (user) => {
        setUsertype(user?.usertype);
        switch (user?.usertype) {
            case "sponsee":
                UserService.getSponseeProfile(user.id).then((res) => {
                    setProfile(res)
                })
                return;
            case "sponsor":
                UserService.getSponsorProfile(user.id).then((res) => {
                    setProfile(res)
                })
                return;
            case "agency":
                UserService.getAgencyProfile(user.id).then((res) => {
                    setProfile(res)
                })
                return;
            default: return;
        }
    }

    useEffect(() => {
        console.log('profile', profile);
        profile && getUserProfileImgs();
    }, [profile])

    useEffect(() => {
        if (accountId) {
            UserService.getUserById(accountId).then((user) => {
                getUserProfile(user)
            })
        } else if (currentUser) {
            navigate(`/account/${currentUser.id}`)
        } else {
            navigate('/login');
        }
    }, [])

    return (
        <Container>
            <HeroSection user={profile} profileImg={profileImg} profileBg={profileBg} />
            {
                profile && displayProfilePage()
            }
        </Container >
    )
}

export default Account
