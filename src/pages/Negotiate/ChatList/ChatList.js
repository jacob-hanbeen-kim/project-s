import React, { useEffect, useState } from 'react'
import {
    Container,
    ChatItem
} from './ChatList.styled';
import { Text } from '../../../components';
import UserService from '../../../services/users-service';
import { useAuth } from '../../../contexts/AuthContext';

const ChatList = ({ chatrooms, setDisplayChatroom }) => {
    const { currentUser } = useAuth();
    const [chatroomList, setChatroomList] = useState([]);

    const fakeData = () => {
        let temp = [];
        for (let index = 0; index < 30; index++) {
            temp.push(index);
        }

        return temp;
    }

    useEffect(() => {
        if (chatrooms) {
            chatrooms.map((room) => {
                room.members.map((userId) => {
                    if (userId !== currentUser.id) {
                        UserService.getUserById(userId).then((res) => {
                            const info = {
                                room: room,
                                user: res
                            }
                            setChatroomList(chatroomList => [...chatroomList, info]);
                        });
                    }
                })
            })
        }
    }, [chatrooms])

    return (
        <Container>
            {
                chatroomList.map((roomInfo, idx) =>
                    <ChatItem key={idx} onClick={() => setDisplayChatroom(roomInfo.room)}>
                        <Text>{roomInfo.user.name}</Text>
                    </ChatItem>
                )
            }
        </Container>
    )
}

export default ChatList