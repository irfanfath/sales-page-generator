'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { saveSession } from '@/lib/auth'

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('ai-sales-users') || '[]')
    const exists = users.find((u: any) => u.email === email)
    if (exists) return alert('Email already registered')

    const user = { name, email, password }
    users.push(user)
    localStorage.setItem('ai-sales-users', JSON.stringify(users))
    saveSession(user)
    router.push('/dashboard')
  }

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Account</h1>
      <input className="w-full p-4 rounded-2xl border mb-4" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="w-full p-4 rounded-2xl border mb-4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="w-full p-4 rounded-2xl border mb-6" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="w-full py-4 rounded-2xl bg-black text-white cursor-pointer">Register</button>
    </div>
  )
}