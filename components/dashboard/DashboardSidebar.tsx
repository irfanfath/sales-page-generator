'use client'

import { LayoutDashboard, Sparkles, LogOut, X, Menu, ChevronRight, Crown } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { clearSession, getSession } from '@/lib/auth'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DashboardSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    setSession(getSession())
  }, [])

  const handleLogout = () => {
    clearSession()
    router.replace('/login')
  }

  const handleNavigate = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  const navItems = [
    {
      icon: <LayoutDashboard size={18} />,
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: <Sparkles size={18} />,
      label: 'Generate Page',
      path: '/generator'
    }
  ]

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-5 py-4">
        <div>
          <h1 className="font-black text-blue-900 text-lg">SalesAI</h1>
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Enterprise</p>
        </div>

        <button onClick={() => setOpen(true)} className="text-slate-700">
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      <aside
        className={`
          fixed md:relative top-0 left-0 z-50
          w-72 min-h-screen
          bg-white/95 backdrop-blur-2xl
          border-r border-slate-200
          px-6 py-8
          flex flex-col
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="mb-12 px-2">
          <h1 className="text-3xl font-black text-blue-900">SalesAI</h1>
          <div className="flex items-center gap-2 mt-2">
            <Crown size={14} className="text-amber-500" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              Enterprise Suite
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {navItems.map((nav, i) => {
            const active = pathname === nav.path

            return (
              <motion.button
                whileHover={{ x: 4 }}
                key={i}
                onClick={() => handleNavigate(nav.path)}
                className={`cursor-pointer w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all ${
                  active
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 font-semibold">
                  {nav.icon}
                  {nav.label}
                </div>

                <ChevronRight size={16} className={active ? 'opacity-100' : 'opacity-30'} />
              </motion.button>
            )
          })}
        </div>

        <div className="mt-10 bg-gradient-to-br from-blue-950 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-blue-200 mb-3">
            AI ENGINE STATUS
          </p>
          <h3 className="text-xl font-bold mb-2">Generator Ready</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Conversion model optimized and export pipeline active.
          </p>

          <div className="mt-5 w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div className="h-full w-[92%] bg-white rounded-full" />
          </div>

          <p className="mt-2 text-xs">92% Prompt Accuracy</p>
        </div>

        <div className="mt-auto">
          <div className="border-t pt-6 border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                {session?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="font-bold text-slate-800 truncate">
                  {session?.name || 'User'}
                </p>
                <p className="text-xs text-slate-400">Admin Workspace</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="cursor-pointer w-full py-3 rounded-2xl bg-red-500 text-white font-semibold flex items-center justify-center gap-2 hover:bg-red-600 transition"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}