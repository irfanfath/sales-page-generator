'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/lib/auth'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { ArrowRight, Mail, Lock, User, ShieldCheck, BarChart3 } from 'lucide-react'

export default function RegisterForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    registerUser({ name, email, password })
    toast.success('Account created successfully')
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-stretch bg-[#faf8ff]">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900 items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-black" />
        <div className="relative z-10 max-w-lg text-white">
          <div className="flex items-center gap-3 mb-8"><BarChart3 size={38} /><span className="text-3xl font-black">SalesAI</span></div>
          <h1 className="text-5xl font-bold leading-tight mb-6">Create your AI growth workspace in minutes.</h1>
          <p className="text-lg text-slate-300 mb-10">Join modern teams using AI-generated sales funnels, persuasive landing pages, and smart conversion copy.</p>
          <div className="flex items-center gap-4 p-5 bg-white/10 rounded-2xl border border-white/10">
            <div className="h-12 w-12 rounded-full bg-white text-slate-900 flex items-center justify-center"><ShieldCheck /></div>
            <div><p className="uppercase text-xs tracking-wider text-slate-300">Trusted Setup</p><p className="text-xl font-semibold">Fast. Secure. Ready instantly.</p></div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-12 py-20 bg-white">
        <div className="max-w-md w-full">
          <div className="lg:hidden flex items-center gap-2 mb-8"><BarChart3 className="text-slate-900" /><span className="text-2xl font-black text-slate-900">SalesAI</span></div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Create Account</h2>
          <p className="text-slate-500 mb-8">Start generating premium sales pages with your own workspace.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase text-slate-500">Full Name</label>
              <div className="relative mt-2">
                <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full border border-slate-300 rounded-xl px-4 py-4 pr-12" />
                <User className="absolute right-4 top-4 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-slate-500">Email Address</label>
              <div className="relative mt-2">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border border-slate-300 rounded-xl px-4 py-4 pr-12" />
                <Mail className="absolute right-4 top-4 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-slate-500">Password</label>
              <div className="relative mt-2">
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full border border-slate-300 rounded-xl px-4 py-4 pr-12" />
                <Lock className="absolute right-4 top-4 text-slate-400" size={18} />
              </div>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-slate-900 text-white font-semibold flex justify-center items-center gap-2">
              Create My Workspace <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center text-slate-500">Already have an account?<Link href="/login" className="text-indigo-600 font-semibold ml-1">Login here</Link></div>
        </div>
      </div>
    </main>
  )
}