import { useEffect, useRef } from 'react';
import { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext';
import ChatroomService from '../../../services/chatroom-services';
import { onSnapshot } from 'firebase/firestore';
import {
    Container,
    MessageContainer,
    Input,
    Form,
    SendButton,
    SendIcon
} from './ChatBox.styled';
import Message from './Message/Message';

const ChatBox = ({ chatroom }) => {
    const { currentUser } = useAuth();
    const [formValue, setFormValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    const dummy = useRef();

    const sendMessage = (e) => {
        e.preventDefault();

        if (formValue) {
            const fields = ChatroomService.messageFields
                .setMessage(formValue)
                .setSender(currentUser.id)
                .getFields();

            ChatroomService.addMessage(chatroom.id, fields).then(() => {
                setFormValue('');
                // dummy.current.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }

    const onFormValueChange = (e) => {
        setFormValue(e.target.value)
    }

    useEffect(() => {
        console.log('chatroom', chatroom);
        if (chatroom) {
            const q = ChatroomService.getMessageByIdQuery(chatroom.id);
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const msgs = snapshot.docs.map(doc => doc.data());
                setMessages(msgs);
            });

            return unsubscribe;
        }
    }, [chatroom])

    return (
        <Container>
            <MessageContainer>
                {
                    messages.map((msg, idx) => (
                        < Message key={idx} message={msg.message} isSender={msg.sender === currentUser.id} isOffer={false} />
                    ))
                }

                <div ref={dummy} />
            </MessageContainer>
            <Form onSubmit={sendMessage}>
                <Input value={formValue} onChange={(e) => onFormValueChange(e)} placeholder="Message..." />
                {/* <button type="submit" disabled={!formValue}>Send</button> */}
                <SendButton onClick={sendMessage}>
                    <SendIcon />
                </SendButton>
            </Form>
        </Container>
    )
}

export default ChatBox