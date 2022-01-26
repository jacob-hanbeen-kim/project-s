import {
    AccountContainer,
} from './Account.styled';

import Profile from './Profile/Profile';
import Sponsor from './Sponsor/Sponsor';

const Account = ({ currentAccount }) => {
    return (
        <AccountContainer>
            {/* <Profile />
            <Sponsor /> */}
            <h1 style={{ fontSize: '2vw' }}>Current User</h1>
            <p style={{ fontSize: '1.5vw' }}>
                {currentAccount}
            </p>
        </AccountContainer >
    )
}

export default Account
