'use client'

import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useSelectedLayoutSegments } from 'next/navigation';
import classNames from "classnames";
import { FaTrashAlt } from 'react-icons/fa';
import ChatItemRemove from "./chat-item-remove";

function ChatNavItems() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, 'users', session?.user?.email!, 'chats')
  )
  const segments = useSelectedLayoutSegments();
  let activeChat = '';
  // The following is url-dependant, not ideal, but it seems to be intended this way, using useSelectedLayoutSegments() to get the current segments, client side.
  // Url for chat page since last layout, is /chats/[id], so Im targeting that.
  if (segments.length === 2 && segments[0] === 'chats' && segments[1].length === 20) {
    activeChat = segments[1];
  }

  return <>
    {chats && chats.docs.map(c => {
      const chat = c.data();
      return <div className="flex" key={c.id}>
        <Link href={'/app/chats/' + c.id}
          className={classNames({
            "flex flex-1 py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0": true,
            "bg-gray-800/10": activeChat !== c.id,
            "bg-gray-500/10": activeChat === c.id
          })}>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className={classNames({
                'w-3 h-3 rounded-full bg-gray-600': true,
                'bg-green-600': activeChat === c.id
              })} />
              <div className="font-bold">{chat.name || 'Unnamed chat'}</div>
            </div>
          </div>
        </Link>
        <ChatItemRemove id={c.id} activeChat={activeChat}></ChatItemRemove>
      </div>
    })}
  </>
}

export default ChatNavItems