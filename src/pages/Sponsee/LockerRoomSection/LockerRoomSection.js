import {
    Container,
    SideBarContainer,
    ApparelContainer
} from './LockerRoomSection.styled';

import SideFormBar from './SideFormBar/SideFormBar';
import ApparelCarousel from './ApparelCarousel/ApparelCarousel'

const images = [
    {
        src: process.env.PUBLIC_URL + '/images/account/lockerRoom/pants.svg',
        alt: 'pants'
    },
    {
        src: process.env.PUBLIC_URL + '/images/account/lockerRoom/shirts.svg',
        alt: 'shirts'
    },
    {
        src: process.env.PUBLIC_URL + '/images/account/lockerRoom/socks.svg',
        alt: 'socks'
    }
]

const LockerRoomSection = ({ user }) => {
    return (
        <Container>
            <SideBarContainer>
                <SideFormBar />
            </SideBarContainer>
            <ApparelContainer>
                <ApparelCarousel images={images} />
            </ApparelContainer>
        </Container>
    )
}

export default LockerRoomSection
