'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { saveSession } from '@/lib/auth'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('ai-sales-users') || '[]')
    const found = users.find((u: any) => u.email === email && u.password === password)
    if (!found) return toast.error('Invalid credentials')

    saveSession(found)
    toast.success('Login success')
    router.push('/dashboard')
  }

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome Back</h1>
      <input className="w-full p-4 rounded-2xl border mb-4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="w-full p-4 rounded-2xl border mb-6" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="w-full py-4 rounded-2xl bg-black text-white cursor-pointer">Login</button>
    </div>
  )
}