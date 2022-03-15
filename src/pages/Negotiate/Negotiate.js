import React, { useEffect, useState } from 'react'
import {
    Container,
    SidebarContainer,
    ChatContainer,
    PreviewContainer
} from './Negotiate.styled';

import ChatList from './ChatList/ChatList';
import ChatBox from './ChatBox/ChatBox';
import ContractPreview from './ContractPreview/ContractPreview';
import ChatroomService from '../../services/chatroom-services';
import { useAuth } from '../../contexts/AuthContext';

const Negotiate = () => {
    const { currentUser } = useAuth();
    const [chatRooms, setChatRooms] = useState([]);
    const [displayChatRoom, setDisplayChatroom] = useState(null);

    useEffect(() => {
        console.log('currentUser', currentUser);
        currentUser && ChatroomService.getChatrooms(currentUser.id).then((res) => {
            console.log(res);
            setChatRooms(res);
            setDisplayChatroom(res[0]);
        });
    }, [currentUser])

    return (
        <Container>
            <SidebarContainer>
                <ChatList chatrooms={chatRooms} setDisplayChatroom={setDisplayChatroom} />
            </SidebarContainer>
            <ChatContainer>
                <ChatBox chatroom={displayChatRoom} />
            </ChatContainer>
            <PreviewContainer>
                <ContractPreview />
            </PreviewContainer>
        </Container>
    )
}

export default Negotiate