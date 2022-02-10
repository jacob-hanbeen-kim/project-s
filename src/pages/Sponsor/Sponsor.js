import {
    Container
} from './Sponsor.styled';

// sections
import HeroSection from './HeroSection/HeroSection';
import { Tabs } from '../../components';

const Sponsor = ({ currentAccount, username }) => {

    return (
        <Container>
            <HeroSection currentAccount={currentAccount} username={username} />
            <Tabs>
                <div label="Profile">Profile Section for {username}</div>
                <div label="Locker Room">Locker Room Section</div>
                <div label="Past Partnerships">Past PartnerShips Sectione</div>
            </Tabs>
        </Container>
    )
}

export default Sponsor