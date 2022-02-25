import {
    Container
} from './Waitlist.styled';
import HeroSection from './HeroSection/HeroSection';
import DemoSection from './DemoSection/DemoSection';
import { ImageMap } from '../../components';

import { useRef, useState, useEffect } from 'react';

const Waitlist = () => {

    const profileSection = useRef();
    const lockerRoomSection = useRef();
    const negotiationSection = useRef();

    const [displayNewContract, setDisplayNewContract] = useState(false);
    const [negotiationState, setNegotiationState] = useState(0);

    const toProfileSection = () => {
        profileSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    const toLockerRoomSection = () => {
        setDisplayNewContract(false);
        lockerRoomSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    const toNegotiationSection = () => {
        setDisplayNewContract(false);
        negotiationSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        if (negotiationState === 2) {
            setTimeout(function () {
                setNegotiationState(3)
            }, 1000);
        }

        if (negotiationState === 3) {
            setTimeout(function () {
                setNegotiationState(0)
            }, 2000);
        }
    }, [negotiationState])

    return (
        <Container>
            <HeroSection />
            <DemoSection
                title='Explore'
                description='Identify sports teams, athletes, agents, other brands, and even sponsors to partner with in a matter of seconds'
                image={process.env.PUBLIC_URL + '/images/waitlist/search.png'}
            >
                <ImageMap id='explore' image={process.env.PUBLIC_URL + '/images/waitlist/search.png'} noBg={true} onClick={toProfileSection}>
                    <area coords="516,267,1879,341" shape="rect" />
                </ImageMap>
            </DemoSection>
            <DemoSection
                title='Profile'
                description='Propose your opportunities to the right audience, efficiently'
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
                description='Communicate in style'
                image={process.env.PUBLIC_URL + '/images/waitlist/locker_room.png'}
                ref={lockerRoomSection}
            >
                {
                    displayNewContract ?
                        <ImageMap id='lockerRoom' image={process.env.PUBLIC_URL + '/images/waitlist/new_contract.png'} noBg={true} onClick={() => {
                            toNegotiationSection();
                            setNegotiationState(0);
                        }}>
                            <area coords="1452,873,1223,804" shape="rect" />
                        </ImageMap> :
                        <ImageMap id='lockerRoom' image={process.env.PUBLIC_URL + '/images/waitlist/locker_room.png'} noBg={true} onClick={() => setDisplayNewContract(true)}>
                            <area coords="1082,478,1187,534" shape="rect" />
                        </ImageMap>
                }
            </DemoSection>
            <DemoSection
                title='Negotiate'
                description='Negotiate with confidence'
                image={process.env.PUBLIC_URL + '/images/waitlist/negotiation.png'}
                invert={true}
                layout='center'
                ref={negotiationSection}
            >
                {
                    negotiationState === 0 ?
                        <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_1.png'} noBg={true} onClick={() => setNegotiationState(1)}>
                            <area coords="1589,980,1735,1031" shape="rect" />
                        </ImageMap> :
                        negotiationState === 1 ?
                            <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_3.png'} noBg={true} onClick={() => setNegotiationState(2)}>
                                <area coords="1495,980,1642,1031" shape="rect" />
                            </ImageMap> :

                            negotiationState === 2 ?

                                <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_5.png'} noBg={true} onClick={() => setNegotiationState(3)}>

                                </ImageMap> :

                                <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_6.png'} noBg={true}>

                                </ImageMap>
                }
            </DemoSection>
        </Container>
    )
}

export default Waitlist