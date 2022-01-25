import {
    AccountContainer,
} from './Account.styled';

import Profile from './Profile/Profile';
import Sponsor from './Sponsor/Sponsor';

const Home = () => {
    return (
        <AccountContainer>
            <Profile />
            <Sponsor />
        </AccountContainer>
    )
}

export default Home
