import Link from 'next/link'
import { BarChart3, Sparkles, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { clearSession } from '@/lib/auth'

export default function DashboardSidebar() {
  const router = useRouter()

  const handleLogout = () => {
    clearSession()
    router.push('/login')
  }

  return (
    <aside className="w-72 bg-black text-white p-8 hidden md:block min-h-screen">
      <h1 className="text-2xl font-bold mb-10">AI SalesGen</h1>
      <div className="space-y-5">
        <Link href="/dashboard" className="flex gap-3"><BarChart3 /> Dashboard</Link>
        <Link href="/generator" className="flex gap-3"><Sparkles /> Generate Page</Link>
        <button onClick={handleLogout} className="flex gap-3"><LogOut /> Logout</button>
      </div>
    </aside>
  )
}