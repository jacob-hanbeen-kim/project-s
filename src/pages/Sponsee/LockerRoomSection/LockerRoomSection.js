import {
    Container,
    SideBarContainer,
    ApparelContainer
} from './LockerRoomSection.styled';

import SideFormBar from './SideFormBar/SideFormBar';


const LockerRoomSection = ({ user }) => {
    return (
        <Container>
            <SideBarContainer>
                <SideFormBar></SideFormBar>
            </SideBarContainer>
            <ApparelContainer>
                <img src={process.env.PUBLIC_URL + '/images/account/lockerRoom/pants.svg'} alt='pants' />
                <img src={process.env.PUBLIC_URL + '/images/account/lockerRoom/shirts.svg'} alt='shirts' />
                <img src={process.env.PUBLIC_URL + '/images/account/lockerRoom/socks.svg'} alt='socks' />
            </ApparelContainer>

        </Container>
    )
}

export default LockerRoomSection
