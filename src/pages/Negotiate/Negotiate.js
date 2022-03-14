import React from 'react'
import {
    Container,
    SidebarContainer,
    ChatContainer,
    PreviewContainer
} from './Negotiate.styled';

import ChatList from './ChatList/ChatList';
import ChatBox from './ChatBox/ChatBox';
import ContractPreview from './ContractPreview/ContractPreview';

const Negotiate = () => {
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