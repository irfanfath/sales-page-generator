'use client'

import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { clearSession } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export default function TopNavbar() {
  const router = useRouter()
  return (
    <div className="md:hidden flex items-center justify-between bg-black text-white p-4">
      <h1 className="font-bold">AI SalesGen</h1>
      <div className="flex gap-4 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/generator">Generate</Link>
        <button onClick={()=>{clearSession();router.push('/login')}}><LogOut size={16}/></button>
      </div>
    </div>
  )
}