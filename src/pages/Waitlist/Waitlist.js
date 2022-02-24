import {
    Container
} from './Waitlist.styled';
import HeroSection from './HeroSection/HeroSection';
import DemoSection from './DemoSection/DemoSection';
import { ImageMap } from '../../components';

import { useRef, useState } from 'react';

const Waitlist = () => {

    const profileSection = useRef();
    const lockerRoomSection = useRef();
    const negotiationSection = useRef();

    const [displayNewContract, setDisplayNewContract] = useState(false);

    const toProfileSection = () => {
        profileSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    const toLockerRoomSection = () => {
        setDisplayNewContract(false);
        lockerRoomSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    const toNegotiationSection = () => {
        negotiationSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container>
            <HeroSection />
            <DemoSection
                title='Explore'
                description='Find brand, team, individual players, and facilities in second'
                image={process.env.PUBLIC_URL + '/images/waitlist/search.png'}
            >
                <ImageMap id='explore' image={process.env.PUBLIC_URL + '/images/waitlist/search.png'} noBg={true} onClick={toProfileSection}>
                    <area coords="500,268,1888,342" shape="rect" />
                </ImageMap>
            </DemoSection>
            <DemoSection
                title='Profile'
                description='Choose from sponsor options'
                image={process.env.PUBLIC_URL + '/images/waitlist/profile.png'}
                invert={true}
                layout='right'
                ref={profileSection}
            >
                <ImageMap id='profile' image={process.env.PUBLIC_URL + '/images/waitlist/profile.png'} noBg={true} onClick={toLockerRoomSection}>
                    <area coords="1628,956,1769,1007" shape="rect" />
                </ImageMap>
            </DemoSection>
            <DemoSection
                title='Locker Room'
                description='Engrave your logo'
                image={process.env.PUBLIC_URL + '/images/waitlist/locker_room.png'}
                ref={lockerRoomSection}
            >
                {
                    displayNewContract ?
                        <ImageMap id='lockerRoom' image={process.env.PUBLIC_URL + '/images/waitlist/new_contract.png'} noBg={true} onClick={toNegotiationSection}>
                            <area coords="1452,873,1223,804" shape="rect" />
                        </ImageMap> :
                        <ImageMap id='lockerRoom' image={process.env.PUBLIC_URL + '/images/waitlist/locker_room.png'} noBg={true} onClick={() => setDisplayNewContract(true)}>
                            <area coords="1082,478,1187,534" shape="rect" />
                        </ImageMap>
                }
            </DemoSection>
            <DemoSection
                title='Negotiate'
                description='Accept, Counter Offer, or Decline offers'
                image={process.env.PUBLIC_URL + '/images/waitlist/negotiation.png'}
                invert={true}
                layout='center'
                ref={negotiationSection}
            >
                <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation.png'} noBg={true}>

                </ImageMap>
            </DemoSection>
        </Container>
    )
}

export default Waitlist