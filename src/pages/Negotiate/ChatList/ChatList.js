import React from 'react'
import {
    Container,
    ChatItem
} from './ChatList.styled';
import { Text } from '../../../components';

const ChatList = () => {

    const fakeData = () => {
        let temp = [];
        for (let index = 0; index < 30; index++) {
            temp.push(index);
        }

        return temp;
    }
    return (
        <Container>
            {
                fakeData().map((item) =>
                    <ChatItem>
                        <Text>{item}</Text>
                    </ChatItem>
                )
            }
        </Container>
    )
}

export default ChatList