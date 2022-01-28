import {
    AccountContainer,
} from './Account.styled';

import Profile from './Profile/Profile';
import Sponsor from './Sponsor/Sponsor';

import { Button } from '../../styles/Button.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Account = ({ currentAccount, onLogout }) => {

    const navigate = useNavigate();

    const LogOut = () => {
        onLogout();
        navigate("/");
    }

    useEffect(() => {
        currentAccount === null && navigate("/login");
    })

    return (
        <AccountContainer>
            <Profile currentAccount={currentAccount} />
            {
                currentAccount && <Button onClick={() => LogOut()}>Log out</Button>
            }
            {/* <Sponsor /> */}
        </AccountContainer >
    )
}

export default Account
