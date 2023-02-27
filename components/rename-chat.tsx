'use client'

import { doc, updateDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props = {
  chatRef: string
}

function RenameChat({ chatRef } : Props) {
  const session = useSession();
  const [cd] = useDocument(doc(db, 'users', session.data?.user?.email!, 'chats', chatRef));
  const [value, setValue] = useState('');
  

  useEffect(() => {
    // Everytime the underlying chat document changes, we will update the controlled input with the name value
    const chat = cd?.data();
    setValue(chat?.name || 'Unnamed chat');
  }, [cd]);

  function persist() {
    updateDoc(doc(db, 'users', session.data?.user?.email!, 'chats', chatRef), { name: value });
  }

  return <input 
    type="text" 
    className="py-3 px-4 text-gray-400 bg-transparent cursor-pointer text-sm w-100 hover:bg-gray-500/10 transition-colors duration-200" 
    value={value}
    onChange={(v) => setValue(v.currentTarget.value)}
    onBlur={persist}
  />;
}

export default RenameChat;