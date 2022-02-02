import {
    AccountContainer,
} from './Account.styled';

import Sponsee from '../Sponsee/Sponsee';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Account = ({ currentAccount, userType }) => {

    const navigate = useNavigate();

    useEffect(() => {
        currentAccount === null && navigate("/login");
    })

    return (
        <AccountContainer>
            {
                userType === "sponsee" && <Sponsee currentAccount={currentAccount} />
            }
        </AccountContainer >
    )
}

export default Account
