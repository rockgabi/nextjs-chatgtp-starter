'use client'

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { BiSend } from "react-icons/bi";
import { db } from "../firebase";
import useSWR from 'swr';


interface Props {
  chatId: string;
}

const notify = () => toast('Message sent!', { icon: '👍' });

function ChatInput({ chatId }: Props) {
  const [value, setValue] = useState('');
  const { data: session } = useSession();
  const { data: model } = useSWR('model', null, { fallbackData: 'text-davinci-003' });

  async function send() {
    if (!value) return;
    const message = value.trim();
    setValue('');

    // Add message to firestore
    addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), {
      text: value,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || 'https://ui-avatars.com/api/?name=' + session?.user?.name!,
      }
    }).then(() => {
      notify();
    });

    // Perform a request to the API ask endpoint
    await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        prompt: message,
        chatId,
        session
      })
    })
    
  }


  return <div className="relative">
    <Toaster></Toaster>
    <textarea 
    id="chat-input" 
    rows={2}
    value={value}
    onChange={(v) => setValue(v.currentTarget.value)}
    className="block p-2.5 pr-12 w-full text-sm bg-gray-500/10 rounded-md"
    placeholder="Start typing a message..."></textarea>
    <button className="absolute top-[5px] right-[0px] p-4 z-10" onClick={send}>
      <BiSend className="text-lg"></BiSend>
    </button>
  </div>

}

export default ChatInput;