import { useState } from 'react'
import {
    Container,
    MessageContainer,
    Input,
    Form,
    SendButton,
    SendIcon
} from './ChatBox.styled';
import Message from './Message/Message';

const ChatBox = () => {
    const [formValue, setFormValue] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();

        // await messagesRef.add({
        //     text: formValue,
        //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        //     uid,
        //     photoURL
        // })

        // messages.current.push({
        //     msg: formValue,
        //     isSender: sender,
        // })

        // console.log(messages.current);
        // setSender(!sender);
        setFormValue('');
        // setLoading(false);
        // setDisplayedMessage(getMessage())
    }

    const onFormValueChange = (e) => {
        // setLoading(true);
        setFormValue(e.target.value)
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container>
            <MessageContainer>
                <Message key={1} message={'hello my name is Jacob. I sent you an offer'} isSender={false} isOffer={true} />
                <Message key={1} message={'hello my name is Jacob. I sent you an offer'} isSender={true} isOffer={true} />
                <Message key={1} message={'hello my name is Jacob. I sent you an offer'} isSender={false} isOffer={true} />
                <Message key={1} message={'hello my name is Jacob. I sent you an offer'} isSender={true} isOffer={true} />
                <Message key={1} message={'hello my name is Jacob. I sent you an offer'} isSender={true} isOffer={true} />
            </MessageContainer>
            <Form onSubmit={sendMessage}>
                <Input value={formValue} onChange={(e) => onFormValueChange(e)} placeholder="Message..." />
                {/* <button type="submit" disabled={!formValue}>Send</button> */}
                <SendButton>
                    <SendIcon />
                </SendButton>
            </Form>
        </Container>
    )
}

export default ChatBox