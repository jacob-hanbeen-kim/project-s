import {
    Container,
    SectionContainer
} from './Sponsee.styled';

// sections
import HeroSection from './HeroSection/HeroSection';
import { Tabs } from '../../components';
import ProfileSection from './ProfileSection/ProfileSection';

const Sponsee = ({ currentAccount }) => {
    return (
        <>
            <HeroSection currentAccount={currentAccount} />
            <Tabs>
                <ProfileSection label="Profile" />
                <div label="Hi">hi</div>
            </Tabs>
        </>
    )
}

export default Sponsee
