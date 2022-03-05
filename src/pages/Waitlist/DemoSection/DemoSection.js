import PropTypes from 'prop-types'
import {
    Container,
    DottedLine,
    Content,
    TextContainer,
    TextWrap,
    ImageContainer,
    ImgWrap,
    Img
} from './DemoSection.styled'
import { Text } from '../../../components'
import React, { useEffect, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import AnimatedMousePointer from '../AnimatedMousePointer/AnimatedMousePointer';
import { ImageMap } from '../../../components';

const PAGE = {
    Explore: "Explore",
    Profile: "Profile",
    LockerRoom: "LockerRoom",
    NewContract: "NewContract",
    Negotiation: "Negotiation",
}

const DemoSection = React.forwardRef(({
    title,
    description,
    children,
    accentColor,
    visible,
}, ref) => {

    const [displayNewContract, setDisplayNewContract] = useState(false);
    const [negotiationState, setNegotiationState] = useState(0);

    const [displayPage, setDisplayPage] = useState(PAGE.Explore);

    useEffect(() => {
        if (negotiationState === 2) {
            setTimeout(function () {
                setNegotiationState(3)
            }, 2000);
        }

        // if (negotiationState === 3) {
        //     setTimeout(function () {
        //         setNegotiationState(0)
        //     }, 2000);
        // }
    }, [negotiationState])

    const getExplore = () => {
        return ({
            title: 'Explore',
            description: () => (
                <>
                    <b>Identify</b> sports teams, athletes, agents, other brands, and even sponsors to partner <b>within a matter of seconds</b>
                </>
            ),
            imageMap: () => (
                <ImageMap id='explore' image={process.env.PUBLIC_URL + '/images/waitlist/search.png'} noBg={true} onClick={() => setDisplayPage(PAGE.Profile)}>
                    <area coords="516,267,1879,341" shape="rect" />
                </ImageMap>
            ),
            animatedMousePointer: () => (<AnimatedMousePointer destX={'90%'} destY={'30%'} />)
        })
    }

    const getProfile = () => {
        return ({
            title: 'Profile',
            description: () => (
                <>
                    <b>Propose</b> your opportunities to the right audience efficiently
                </>
            ),
            imageMap: () => (
                <ImageMap id='profile' image={process.env.PUBLIC_URL + '/images/waitlist/profile.png'} noBg={true} onClick={() => setDisplayPage(PAGE.LockerRoom)} >
                    <area coords="1628,956,1769,1007" shape="rect" />
                </ImageMap>
            ),
            animatedMousePointer: () => (<AnimatedMousePointer startX={'90%'} startY={'30%'} destX={'87%'} destY={'90%'} />)
        })
    }

    const getLockerRoom = () => {
        return ({
            title: 'Locker Room',
            description: () => (
                <>Communicate in style. Eliminate any ambiguity between parties.</>
            ),
            imageMap: () => {
                return displayNewContract ?
                    <ImageMap id='lockerRoom' image={process.env.PUBLIC_URL + '/images/waitlist/new_contract.png'} noBg={true} onClick={() => {
                        setDisplayPage(PAGE.Negotiation);
                        setNegotiationState(0);
                    }}>
                        <area coords="1452,873,1223,804" shape="rect" />
                    </ImageMap>
                    :
                    <ImageMap id='lockerRoom' image={process.env.PUBLIC_URL + '/images/waitlist/locker_room.png'} noBg={true} onClick={() => setDisplayNewContract(true)}>
                        <area coords="1082,478,1187,534" shape="rect" />
                    </ImageMap>
            },
            animatedMousePointer: () => {
                return displayNewContract ?
                    <AnimatedMousePointer startX={'57%'} startY={'47%'} destX={'67%'} destY={'77%'} /> :
                    <AnimatedMousePointer startX={'87%'} startY={'90%'} destX={'57%'} destY={'47%'} />
            }
        })
    }

    const getNegotiation = () => {
        return ({
            title: 'Negotiate',
            description: () => (
                <>
                    Negotiate with confidence. <br /> Compare contracts and know your value.
                </>
            ),
            imageMap: () => {
                return negotiationState === 0 ?
                    <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_1.png'} noBg={true} onClick={() => setNegotiationState(1)}>
                        <area coords="1589,980,1735,1031" shape="rect" />
                    </ImageMap>
                    :
                    negotiationState === 1 ?
                        <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_3.png'} noBg={true} onClick={() => setNegotiationState(2)}>
                            <area coords="1495,980,1642,1031" shape="rect" />
                        </ImageMap>
                        :

                        negotiationState === 2 ?
                            <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_5.png'} noBg={true} onClick={() => setNegotiationState(3)} /> :
                            <ImageMap id='negotiate' image={process.env.PUBLIC_URL + '/images/waitlist/negotiation_6.png'} noBg={true} />

            },
            animatedMousePointer: () => {
                return (
                    negotiationState === 0 ? <AnimatedMousePointer startX={'67%'} startY={'77%'} destX={'85%'} destY={'93%'} /> :
                        negotiationState === 1 && <AnimatedMousePointer startX={'85%'} startY={'93%'} destX={'80%'} destY={'93%'} />
                )
            }
        })
    }

    const getSection = () => {
        switch (displayPage) {
            case PAGE.Explore: return getExplore();
            case PAGE.Profile: return getProfile();
            case PAGE.LockerRoom: return getLockerRoom();
            case PAGE.Negotiation:
            case PAGE.NewContract: return getNegotiation();
            default: return getExplore();
        }
    }

    return (
        <Container>
            {/* <DottedLine /> */}
            <SwitchTransition>
                <CSSTransition
                    key={displayPage}
                    timeout={500}
                    classNames={'transition'}
                >
                    <Content>
                        <TextContainer>
                            <TextWrap>
                                <Text variant='h1'>
                                    {getSection().title}
                                </Text>
                            </TextWrap>
                            <TextWrap>
                                <Text variant='subtitle'>
                                    {getSection().description()}
                                </Text>
                            </TextWrap>
                        </TextContainer>
                        <ImageContainer>
                            <ImgWrap>
                                <Img>
                                    {getSection().animatedMousePointer()}
                                    {getSection().imageMap()}
                                </Img>
                            </ImgWrap>
                        </ImageContainer>
                    </Content>
                </CSSTransition>
            </SwitchTransition>
        </Container>
    )
});

DemoSection.defaultProps = {

}

export default DemoSection

    // FaMousePointer
    // FaRegHandPointer