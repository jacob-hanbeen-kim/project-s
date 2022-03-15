import {
    Container,
    TextContainer,
    Text,
    ButtonContainer
} from './Message.styled'

import { ProfileImg } from '../../../../components';
import { Button } from '../../../../styles/Button.styled';

const Message = ({ message, isSender, isOffer, setState }) => {

    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    const getProfileImg = () => {
        return isSender ?
            process.env.PUBLIC_URL + `/images/account/nike/profileImg.png` :
            process.env.PUBLIC_URL + `/images/logo.png`
    }

    return (
        <Container isSender={isSender}>
            {
                !isSender && <ProfileImg hasProfileImg={!isSender} src={getProfileImg()} />
            }
            <TextContainer isSender={isSender}>
                <Text>{message}</Text>
                {/* {
                    isOffer &&
                    <ButtonContainer>
                        <Button invert={isSender} onClick={setState}>Accept</Button>
                        <Button invert={isSender}>Edit</Button>
                        <Button invert={isSender}>Decline</Button>
                    </ButtonContainer>
                } */}
            </TextContainer>

        </Container>
    )
}

export default Message