
function sidebar() {
  return (
    <div className="min-w-[300px] flex flex-col mr-5 py-2 px-3 dark bg-gray-700 gap-2">
      <button className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
        + New Chat
      </button>

      <select className="flex py-3 px-3 items-center gap-3 rounded-md bg-gray-800/10 hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
        <option>Davinci</option>
      </select>

      { /* List of opened chats: */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
        <div className="flex py-3 px-3 items-center gap-3 rounded-md bg-gray-800/10 hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600" />
              <div className="font-bold">Active chat 1</div>
            </div>
          </div>
        </div>

        <div className="flex py-3 px-3 items-center gap-3 rounded-md bg-gray-800/10 hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              <div className="font-bold">Closed chat 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sidebar