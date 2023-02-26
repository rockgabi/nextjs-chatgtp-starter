'use client'

import { useSession, signOut } from "next-auth/react"

function SignOutButton() {
  const { data: session } = useSession();

  return (
    session && (
      <img 
        src={session.user?.image!} 
        alt="Profile Picture" 
        className="w-12 h-12 rounded-full cursor-pointer hover:opacity-50" 
        onClick={() => signOut({ callbackUrl: '/signin'})}/>
    )
  )
}

export default SignOutButton
