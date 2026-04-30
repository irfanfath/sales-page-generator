'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = () => {
    localStorage.setItem('ai-sales-user', JSON.stringify({ name, email, password }))
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Account</h1>
        <input className="w-full p-4 rounded-2xl border mb-4" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input className="w-full p-4 rounded-2xl border mb-4" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-4 rounded-2xl border mb-6" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleRegister} className="w-full py-4 rounded-2xl bg-black text-white">Register</button>
      </div>
    </main>
  )
}