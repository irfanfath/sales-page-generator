'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    const user = localStorage.getItem('ai-sales-user')
    if (!user) return toast.error('User not found. Please register first.')
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome Back</h1>
        <input className="w-full p-4 rounded-2xl border mb-4" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-4 rounded-2xl border mb-6" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full py-4 rounded-2xl bg-black text-white">Login</button>
        <p className="mt-6 text-center">No account? <Link href="/register" className="font-semibold">Register</Link></p>
      </div>
    </main>
  )
}