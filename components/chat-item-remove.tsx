'use client'

import { deleteDoc, doc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaTrashAlt } from 'react-icons/fa';
import { db } from '../firebase';

type Props = {
  id: string,
  activeChat: string
}

function ChatItemRemove({ id, activeChat }: Props) {
  // Delete from firestore
  const { data: session } = useSession();
  const router = useRouter();

  function remove() {
    const docReference = doc(db, 'users', session?.user?.email!, 'chats', id);
    deleteDoc(docReference);
    // Redirect to chats page if we are in the deleted chat
    if (activeChat === id) {
      router.push('/app');
    }
  }

  return <button className="h-[44px] w-[44px] flex justify-center items-center" onClick={remove}>
    <FaTrashAlt></FaTrashAlt>
  </button>
}

export default ChatItemRemove
