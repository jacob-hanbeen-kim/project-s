import { useRef } from 'react';
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

    const dummy = useRef();

    const sendMessage = async (e) => {
        e.preventDefault();

        // 1. get Current User

        // 2. write to database

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
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

                <div ref={dummy} />
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