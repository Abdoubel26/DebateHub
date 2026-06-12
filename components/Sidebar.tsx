import React from 'react'
import { Home, Lightbulb, UserRoundPlus, MessageSquare, User } from "lucide-react"

function Sidebar() {
  return (
    <div className=" flex flex-col gap-3 p-3 w-72 h-full bg-gray-800 text-white  select-none">

        <div className="flex flex-row cursor-pointer gap-2 bg-gray-900 rounded-2xl p-3 active:bg-gray-700 transition-all">
            <Home /><span>Feed</span>
        </div>

        <div className="flex flex-row p-3 cursor-pointer gap-2 hover:bg-gray-900 rounded-2xl active:bg-gray-700 transition-all">
            <Lightbulb /><span>My Topics</span>
        </div>

        <div className="flex flex-row p-3 cursor-pointer gap-2 hover:bg-gray-900 rounded-2xl active:bg-gray-700 transition-all">
            <UserRoundPlus /><span>Joined Debates</span>
        </div>

        <div className="flex flex-row p-3 cursor-pointer gap-2 hover:bg-gray-900 rounded-2xl active:bg-gray-700 transition-all">
            <MessageSquare /><span>Debate Room</span>
        </div>

        <div className="flex flex-row p-3 cursor-pointer gap-2 hover:bg-gray-900 rounded-2xl active:bg-gray-700 transition-all">
            <User /><span>Profile</span>
        </div>

    </div>
  )
}

export default Sidebar
