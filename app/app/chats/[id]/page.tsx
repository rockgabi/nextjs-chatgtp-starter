import RenameChat from '../../../../components/rename-chat';
import ChatInput from '../../../../components/chat-input';
import EmptyChatIcon from '../../../../components/empty-chat-icon';

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
      <div className="flex flex-1 items-center justify-center h-screen flex-col">
        <h1 className="text-3xl font-bold m-5 text-center text-gray-500/30">
          Our chatbot is built to provide the best possible answers to your questions.
        </h1>
        <EmptyChatIcon></EmptyChatIcon>
      </div>
      <div className="">
        <ChatInput></ChatInput>
      </div>
    </div>
  )
}

export default ChatPage