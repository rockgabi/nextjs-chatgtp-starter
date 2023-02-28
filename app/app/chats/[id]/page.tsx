import RenameChat from '../../../../components/rename-chat';
import ChatInput from '../../../../components/chat-input';
import Chat from '../../../../components/chat';

type Props = {
  params: {
    id: string
  }
}

function ChatPage({ params }: Props) {

  return (
    <div className="flex flex-col h-screen py-2">
      <div className="">
        <RenameChat chatId={params.id as string}></RenameChat>
      </div>
      <Chat chatId={params.id as string}></Chat>
      <div className="">
        <ChatInput chatId={params.id as string}></ChatInput>
      </div>
    </div>
  )
}

export default ChatPage