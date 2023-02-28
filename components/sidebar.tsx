import NewChatButton from "./new-chat-button";
import SignOutButton from "./sign-out-button";
import ChatNavItems from "./chat-nav-items";
import ModelSelection from "./model-selection";

function sidebar() {

  return (
    <div className="min-w-[300px] flex flex-col py-2 px-3 dark bg-gray-700 gap-2">
      <NewChatButton></NewChatButton>

      <ModelSelection></ModelSelection>

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