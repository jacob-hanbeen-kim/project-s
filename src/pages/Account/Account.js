import {
    AccountContainer,
} from './Account.styled';

import Sponsee from '../Sponsee/Sponsee';
import Sponsor from '../Sponsor/Sponsor';

import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import StorageService from '../../services/storage-service';

const Account = ({ }) => {

    const { currentUser } = useAuth();

    const [profileImg, setProfileImg] = useState(null);
    const [profileBg, setProfileBg] = useState(null);
    const [viewUser, setViewUser] = useState(currentUser);

    const navigate = useNavigate();
    const { state } = useLocation();

    const getUserProfileImgs = async () => {
        // const img = await StorageService.getProfileImg(viewUser);
        // const bg = await StorageService.getProfileBg(viewUser);
        const img = process.env.PUBLIC_URL + `/images/account/${viewUser.name}/profileImg.png`;
        const bg = process.env.PUBLIC_URL + `/images/account/${viewUser.name}/background.png`;

        setProfileImg(img);
        setProfileBg(bg);
    }

    const displayProfilePage = () => {
        if (viewUser)
            switch (viewUser.usertype) {
                case "sponsee": return <Sponsee user={viewUser} profileImg={profileImg} profileBg={profileBg} />;
                case "sponsor": return <Sponsor user={viewUser} profileImg={profileImg} profileBg={profileBg} />;
                case "agent": return <Sponsee user={viewUser} profileImg={profileImg} profileBg={profileBg} />;
                default: return <div>
                    Page Not Found
                </div>
            }
    }

    useEffect(() => {
        currentUser && setViewUser(currentUser);
    }, [currentUser])

    useEffect(() => {
        viewUser && getUserProfileImgs();
    }, [viewUser])

    useEffect(() => {
        console.log('chainging user to ', currentUser?.name, state);
        state && setViewUser(state.user);
    }, [state])

    useEffect(() => {
        // check if login
        // user && navigate("/login");
    }, [])

    return (
        <AccountContainer>
            {
                displayProfilePage()
            }
        </AccountContainer >
    )
}

export default Account
