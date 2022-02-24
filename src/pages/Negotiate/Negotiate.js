import React, { useEffect, useRef, useState } from 'react'
import {
    Container,
    MessageContainer,
    Form,
    Input
} from './Negotiate.styled';

import Message from './Message/Message';

const Negotiate = ({ offer, setState }) => {
    const dummy = useRef();
    const [formValue, setFormValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [displayedMessage, setDisplayedMessage] = useState(null);
    const messages = useRef([]);

    const [sender, setSender] = useState(true);

    const sendMessage = async (e) => {
        e.preventDefault();

        // await messagesRef.add({
        //     text: formValue,
        //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        //     uid,
        //     photoURL
        // })

        messages.current.push({
            msg: formValue,
            isSender: sender,
        })

        console.log(messages.current);
        setSender(!sender);
        setFormValue('');
        setLoading(false);
        setDisplayedMessage(getMessage())
    }

    const onFormValueChange = (e) => {
        setLoading(true);
        setFormValue(e.target.value)
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        if (offer) {
            let includes = '';

            offer.includes.forEach((item) => {
                includes += `
                    ${item}
                `
            });

            let msg = `
            ${offer.title}
            Includes: ${includes}
            `

            messages.current.push({
                msg: msg,
                isSender: false,
                isOffer: true
            })

            setDisplayedMessage(getMessage())
        }

        setSender(true);
    }, [])

    const getMessage = () => {
        return messages.current.map((msg, idx) => <Message key={idx} message={msg.msg} isSender={msg.isSender} isOffer={msg.isOffer} setState={setState} />)
    }

    // useEffect(() => {
    //     setDisplayedMessage(getMessage());
    //     console.log(displayedMessage);
    // }, [messages.current])

    return (
        <Container>
            <MessageContainer>

                {messages && displayedMessage}
                {loading && <Message key={999} message={'. . .'} isSender={sender} />}

                <span ref={dummy}></span>

            </MessageContainer>

            <Form onSubmit={sendMessage}>

                <Input value={formValue} onChange={(e) => onFormValueChange(e)} placeholder="state your offer" />

                <button type="submit" disabled={!formValue}>Send</button>

            </Form>
        </Container>
    )
}

export default Negotiate