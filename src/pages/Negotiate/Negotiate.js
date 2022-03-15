import React, { useEffect } from 'react'
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

    useEffect(() => {
        console.log('currentUser', currentUser);
        currentUser && ChatroomService.getChatrooms(currentUser.id).then((res) => {
            console.log(res);
        });
    }, [currentUser])

    return (
        <Container>
            <SidebarContainer>
                <ChatList />
            </SidebarContainer>
            <ChatContainer>
                <ChatBox />
            </ChatContainer>
            <PreviewContainer>
                <ContractPreview />
            </PreviewContainer>
        </Container>
    )
}

export default Negotiate