import { collection, getDocs, getDoc, query, where, setDoc, updateDoc, deleteDoc, doc, addDoc, orderBy, limit, serverTimestamp } from 'firebase/firestore'
// firebase
import { db } from '../firbase-config';

let chatRoomCoolectionRef = collection(db, "chatroom");

const getChatrooms = async (uid) => {
    let q = query(chatRoomCoolectionRef, where('members', 'array-contains', uid));
    const data = await getDocs(q);
    const chatrooms = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return chatrooms;
}

const getMessageByIdQuery = (chatroomId) => {
    const messageRef = collection(db, "chatroom", chatroomId, 'messages');
    const q = query(messageRef, orderBy('createdOn'), limit(20));

    return q;
}

const createChatroom = async (fields) => {
    await addDoc(chatRoomCoolectionRef, fields);
}

const addMessage = async (chatroomId, fields) => {
    const messageRef = collection(db, "chatroom", chatroomId, 'messages');
    await addDoc(messageRef, fields);
}

class MessageFields {
    fields = {}

    constructor() {
        this.fields['createdOn'] = serverTimestamp();
    }

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

    getFields() {
        return this.fields;
    }
}
export const messageFields = new MessageFields();

const ChatroomService = {
    getChatrooms,
    getMessageByIdQuery,
    createChatroom,
    addMessage,
    messageFields
}

export default ChatroomService;