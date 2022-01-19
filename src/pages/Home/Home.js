import {
    HomeContainer,
} from './Home.styled';

import Profile from './Profile/Profile';
import Sponsor from './Sponsor/Sponsor';

const Home = () => {
    return (
        <HomeContainer>
            <Profile />
            <Sponsor />
        </HomeContainer>
    )
}

export default Home
