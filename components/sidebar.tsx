import NewChatButton from "./new-chat-button";
import SignOutButton from "./sign-out-button";
import ChatNavItems from "./chat-nav-items";

function sidebar() {

  return (
    <div className="min-w-[300px] flex flex-col py-2 px-3 dark bg-gray-700 gap-2">
      <NewChatButton></NewChatButton>

      <select className="flex py-3 px-3 items-center gap-3 rounded-md bg-gray-800/10 hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
        <option>Davinci</option>
      </select>

      { /* List of opened chats: */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">

      <ChatNavItems></ChatNavItems>
      </div>

      <div className="flex flex-col gap-2 mt-auto items-center">
        <SignOutButton></SignOutButton>
      </div>
    </div>
  )
}

export default sidebar