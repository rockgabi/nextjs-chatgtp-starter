'use client'

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { db } from "../firebase";

function NewChatButton() {
  const router = useRouter();
  const { data: session } = useSession();
  
  async function createChat() {
    // Create firebase entry
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp(),
    });

    // Redirect to new chat page
    router.push(`/app/chats/${doc.id}`);
  }

  return (
    <button 
      className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20"
      onClick={createChat}
    >
      + New Chat
    </button>
  )
}

export default NewChatButton