import {
    AccountContainer,
} from './Account.styled';

import Sponsee from '../Sponsee/Sponsee';
import Sponsor from '../Sponsor/Sponsor';

import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Account = ({ currentAccount }) => {

    const [usertype, setUsertype] = useState(null);

    const navigate = useNavigate();
    const { state } = useLocation();
    let { username } = useParams();

    const displayProfilePage = () => {
        switch (usertype) {
            case "sponsee": return <Sponsee currentAccount={currentAccount} username={username} />;
            case "sponsor": return <Sponsor currentAccount={currentAccount} username={username} />;
            case "agent": return <Sponsee currentAccount={currentAccount} username={username} />;
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
            setUsertype('sponsee');
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
