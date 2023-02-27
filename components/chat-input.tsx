'use client'

import { useState } from "react";
import { BiSend } from "react-icons/bi";

interface Props {

}

function ChatInput() {
  const [value, setValue] = useState('');

  function send() {
    // Do stuff in firebase with value
    
    setValue('');
  }


  return <div className="relative">
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