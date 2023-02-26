'use client'

import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react"
import Link from "next/link";

function ChatNavItems() {
  const { data: session} = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, 'users', session?.user?.email!, 'chats')
  )

  return <>
    { chats && chats.docs.map(c => {
      const chat = c.data();
      return <Link href={'/app/chats/' + c.id} key={c.id} className="flex py-3 px-3 items-center gap-3 rounded-md bg-gray-800/10 hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-600" />
          <div className="font-bold">{chat.name || 'Unnamed chat'}</div>
        </div>
      </div>
    </Link>
    })}
  </>
}

export default ChatNavItems