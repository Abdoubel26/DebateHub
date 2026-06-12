"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const usersList = [
  { id: "usr_1", name: "Emma Watson", image: "https://i.pravatar.cc/150?img=5", lastMessage: "The 'soul' is just a collection of data...", topic: "AI & Creativity", active: true },
  { id: "usr_2", name: "Sarah Ahmed", image: "https://i.pravatar.cc/150?img=12", lastMessage: "Civic principles must come first.", topic: "Religion & Politics", active: false },
  { id: "usr_3", name: "Bob Smith", image: "https://i.pravatar.cc/150?img=8", lastMessage: "But free markets naturally scale...", topic: "Capitalism Pros", active: false },
];

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(usersList[0]);

  return (
    <div className="flex flex-1 h-[calc(100vh-65px)] bg-gray-900 text-white overflow-hidden">
      
      <div className="flex-1 flex flex-col h-full border-r border-gray-800 p-6 justify-between">
        <div>

          <div className="border-b border-gray-800 pb-4 mb-4 flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src={selectedUser.image}
                alt={selectedUser.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">{selectedUser.name}</h2>
              <p className="text-xs text-violet-400 font-medium">Topic: {selectedUser.topic}</p>
            </div>
          </div>

          <div className="text-sm text-slate-300 space-y-4">
            <p className="italic text-slate-500">
              Viewing conversation history with {selectedUser.name}...
            </p>
            <div className="bg-gray-800/40 border border-gray-800 rounded-2xl p-4 max-w-[80%]">
              <p className="text-xs font-semibold text-violet-400 mb-1">{selectedUser.name}</p>
              {selectedUser.lastMessage}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row">
            <input placeholder={`Type a response to counter ${selectedUser.name}...`} className="bg-gray-800/30 border border-gray-800 w-full rounded-xl p-3 text-sm text-white placeholder:text-slate-500 focus:outline-0"> 
            </input>
            <button className="bg-blue-700 p-2.5 cursor-pointer rounded-full ml-2 ">
                <ArrowUp />
            </button>
        </div>

      </div>

      <div className="w-80 bg-gray-900/50 flex flex-col overflow-y-auto p-4 gap-3 select-none">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2 mb-1">
          Active Debates
        </h3>
        
        {usersList.map((user) => {
          const isSelected = selectedUser.id === user.id;

          return (
            <button
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`w-full flex flex-row items-center gap-3 p-3 rounded-2xl transition-all text-left outline-none border ${
                isSelected
                  ? "bg-gray-800 border-gray-700 text-white shadow-md"
                  : "bg-transparent border-transparent text-slate-400 hover:bg-gray-800/40 hover:text-slate-200"
              }`}
            >
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="rounded-full object-cover border border-gray-700"
                />
                {user.active && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-gray-900" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-sm font-semibold truncate">{user.name}</p>
                </div>
                <p className="text-xs text-violet-400/90 truncate font-medium mt-0.5">
                  {user.topic}
                </p>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {user.lastMessage}
                </p>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default ChatPage;