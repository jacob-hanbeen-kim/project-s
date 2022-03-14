import {
    AccountContainer,
} from './Account.styled';

import Sponsee from '../Sponsee/Sponsee';
import Sponsor from '../Sponsor/Sponsor';

import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import StorageService from '../../services/storage-service';
import UserService from '../../services/users-service';

const Account = ({ }) => {

    // const currentUser = {
    //     uid: '0xa38730a865eD8f3a1877Ad99DD8F21A1734661aF',
    //     name: 'Test User',
    //     usertype: 'sponsee'
    // }

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
        console.log('current User', currentUser);
        currentUser && setViewUser(currentUser);
    }, [currentUser])

    useEffect(() => {
        console.log('viewUser', viewUser);
        viewUser && getUserProfileImgs();
    }, [viewUser])

    useEffect(() => {
        console.log('chainging user to ', currentUser?.name, state);
        if (state) {
            UserService.getUserById(state.userId).then((user) => {
                setViewUser(user);
            });
        }
    }, [state])

    useEffect(() => {
        // check if login
        !currentUser && navigate("/login");
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
