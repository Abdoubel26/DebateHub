import React from 'react'
import { Home, Lightbulb, UserRoundPlus, MessageSquare, User } from "lucide-react"
import  Link  from "next/link"
import SidebarLinks from '@/lib/SidebarLinks';

function Sidebar() {
  return (
    <div className=" flex flex-col gap-2 p-3 w-72 h-full bg-gray-900  text-white  select-none">

       <SidebarLinks />

    </div>
  )
}

export default Sidebar
