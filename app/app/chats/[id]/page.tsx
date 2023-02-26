import { useRouter } from 'next/router'
import React from 'react'
import RenameChat from '../../../../components/rename-chat'

type Props = {
  params: {
    id: string
  }
}


function ChatPage({ params }: Props) {
  
  return (
    <div className="flex flex-col h-screen py-2">
      <div className="">
        <RenameChat chatRef={params.id as string}></RenameChat>
      </div>
      <div className="flex flex-1 items-center justify-center h-screen">
        <h1 className="text-5xl font-bold m-5">Chat Page</h1>
      </div>
      <div className="">Drawer</div>
    </div>
  )
}

export default ChatPage