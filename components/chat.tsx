'use client'

import { useCollection } from 'react-firebase-hooks/firestore';
import { useSession } from 'next-auth/react';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

import EmptyChatIcon from "./empty-chat-icon";
import ChatMessage from './chat-message';

function EmptyChat() {
  return <div className="flex flex-1 items-center justify-center h-screen flex-col">
  <h1 className="text-3xl font-bold m-5 text-center text-gray-500/30">
    Our chatbot is built to provide the best possible answers to your questions.
  </h1>
  <EmptyChatIcon></EmptyChatIcon>
</div>;
}

type Props = {
  chatId: string
}

function Chat({ chatId }: Props) {
  const {data: session} = useSession();
  const [col] = useCollection(session && query(
    collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    orderBy('createdAt', 'asc')
  ));

  return col?.size === 0 ? <EmptyChat /> : <div className="flex flex-1 h-screen flex-col overflow-y-auto overflow-x-hidden">
    { col?.docs.map((doc) => <ChatMessage key={doc.id} message={doc.data()}></ChatMessage>) }
  </div>;
}

export default Chat;
