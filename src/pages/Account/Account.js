import {
    AccountContainer,
} from './Account.styled';

import Sponsee from '../Sponsee/Sponsee';
import Sponsor from '../Sponsor/Sponsor';

import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Account = ({ currentAccount, user }) => {

    const [usertype, setUsertype] = useState(null);

    const navigate = useNavigate();
    const { state } = useLocation();
    let { username } = useParams();

    const getUserName = () => {
        if (username) return username;
        if (user) return user.name;

        console.log('no user found');
        // navigate("/");
    }

    const displayProfilePage = () => {
        switch (usertype) {
            case "sponsee": return <Sponsee currentAccount={currentAccount} username={getUserName()} />;
            case "sponsor": return <Sponsor currentAccount={currentAccount} username={getUserName()} />;
            case "agent": return <Sponsee currentAccount={currentAccount} username={getUserName()} />;
            default: return <div>
                Page Not Found
            </div>
        }
    }

    useEffect(() => {
        // check if login
        currentAccount === null && navigate("/login");

        // check usertype
        if (state && state.usertype) {
            setUsertype(state.usertype);
        } else {
            // fetch current user and set usertype
            setUsertype('sponsor');
        }
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
