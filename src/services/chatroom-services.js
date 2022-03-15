import { collection, getDocs, getDoc, query, where, setDoc, updateDoc, deleteDoc, doc, addDoc } from 'firebase/firestore'
// firebase
import { db } from '../firbase-config';

let chatRoomCoolectionRef = collection(db, "chatroom");

const getChatrooms = async (uid) => {
    chatRoomCoolectionRef = query(chatRoomCoolectionRef, where('members', 'array_contains', uid));
    const data = await getDocs(chatRoomCoolectionRef);
    const chatrooms = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return chatrooms;
}

const createChatroom = async (fields) => {
    await addDoc(chatRoomCoolectionRef, fields);
}

const addMessage = async (chatroomId, fields) => {
    const messageRef = doc(chatRoomCoolectionRef, chatroomId, "messages");
    await updateDoc(messageRef, fields);
}

class MessageFields {
    fields = {}

    clear() {
        this.fields = {};
        return this;
    }

    setMessage(message) {
        this.fields['message'] = message;
        return this;
    }

    setSender(sender) {
        this.fields['sender'] = sender;
        return this;
    }

    setCreatedOn() {
        this.fields['createdOn'] = '';
        return this;
    }

    getFields() {
        return this.fields;
    }
}
export const messageFields = new MessageFields();

const ChatroomService = {
    getChatrooms,
    createChatroom,
    addMessage
}

export default ChatroomService;