import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { auth } from "@clerk/nextjs/server"
import { Bell, Plus, Sun, Moon } from "lucide-react"

async function Navbar() {

 const { userId } = await auth();

  return (
    <div className="sticky top-0 z-40 border-b border-gray-300 bg-gray-900">
      <div className="max-w-7xl mx-auto w-full px-4 py-3 sm:px-6 ">
        <div className="flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3 group">
            <span className="hidden text-xl font-semibold text-white sm:inline tracking-tight">Debatria</span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
             {userId ? 
             <>
            <Link href="/new" className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 bg-slate-800/60 hover:bg-slate-800/80 transition text-sm font-medium text-slate-100">
                <Plus color="white" size={20} />
            </Link>
            <Link href="/notifications" className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 bg-slate-800/60 hover:bg-slate-800/80 transition text-sm font-medium text-slate-100">
                <Bell color="white" size={20} />
            </Link>
              </>
               : null}
            <div className="flex items-center gap-2 rounded-lg cursor-pointer px-3 py-1.5 bg-slate-800/60 hover:bg-slate-800/80 transition text-sm font-medium text-slate-100">
                <Moon color="white" size={20} />
            </div>
            <Show when="signed-out">
              <SignInButton>
                <button className="rounded-full border border-white/10 cursor-pointer px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5 sm:px-4">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="rounded-full bg-slate-400 cursor-pointer px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-500 sm:px-4">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton appearance={{ elements: { avatarBox: { width: '36px', height: '36px' } } }} />
            </Show>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
