'use client'

import { BarChart3, Sparkles, LogOut, X, Menu } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { clearSession } from '@/lib/auth'
import { useState } from 'react'

export default function DashboardSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    clearSession()
    router.replace('/login')
  }

  const handleNavigate = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black text-white flex items-center justify-between px-4 py-4 shadow-lg">
        <h1 className="text-lg font-bold">AI SalesGen</h1>
        <button type="button" onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE BACKDROP */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:relative top-0 left-0 z-50
          w-72 bg-black text-white p-8 min-h-screen shrink-0
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* CLOSE BUTTON MOBILE */}
        <div className="md:hidden flex justify-end mb-6">
          <button type="button" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-10">AI SalesGen</h1>

        <div className="space-y-4">
          <button
            type="button"
            onClick={() => handleNavigate('/dashboard')}
            className={`flex gap-3 w-full p-3 rounded-xl ${
              pathname === '/dashboard' ? 'bg-white/20' : 'bg-white/10'
            }`}
          >
            <BarChart3 /> Dashboard
          </button>

          <button
            type="button"
            onClick={() => handleNavigate('/generator')}
            className={`flex gap-3 w-full p-3 rounded-xl ${
              pathname === '/generator' ? 'bg-white/20' : 'bg-white/10'
            }`}
          >
            <Sparkles /> Generate Page
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="flex gap-3 w-full p-3 rounded-xl bg-red-500/80"
          >
            <LogOut /> Logout
          </button>
        </div>
      </aside>
    </>
  )
}