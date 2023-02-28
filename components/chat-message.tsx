import classNames from "classnames";
import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData
}

function ChatMessage({ message }: Props) {
  return <div className={classNames({
    "flex gap-5 my-5 p-5": true,
    "bg-gray-200 text-gray-500": message.user._id === "Chatbot",
  })}>
    <img src={message.user.avatar} alt="" className="h-10 w-10 rounded-full" />
    <p className="text-sm">{message.text}</p>
  </div>;
}

export default ChatMessage;
