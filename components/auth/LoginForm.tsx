'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/lib/auth'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { ArrowRight, Mail, Lock, TrendingUp, BarChart3 } from 'lucide-react'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const success = loginUser(email, password)
    if (!success) return toast.error('Invalid email or password')

    toast.success('Login success')
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-stretch bg-[#faf8ff]">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#00236f] items-center justify-center p-12">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnsH7QwXLXxOB1-kGlvYs4xwpsBEX_e7Sudw3o97jnLXJ-Ls-_G6gcf3QS9OW41pCVY07DI7_igiOZikeIJXxpNL_XE2nKYY3lM3YT5QhWYsjWueO4gtuSNsu8_Mz4L7VIcwzmVkQZdWrKPdCZ0aXMFsMuF6xW8-BTI0QAy5sdU3Lp6hgIokNNq7PlHLpIJRLyQtXYpM-lnhcbd6nivu16GBS3LQat-VROESxFV_f0wkZemcHAiU2nc86X_U2we2laCca9Bsht-JB6" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00236f] via-[#00236f]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-lg text-white">
          <div className="flex items-center gap-3 mb-8"><BarChart3 size={38} /><span className="text-3xl font-black">SalesAI</span></div>
          <h1 className="text-5xl font-bold leading-tight mb-6">Scale your performance with informed confidence.</h1>
          <p className="text-lg text-blue-100 mb-10">Experience the next generation of sales intelligence. Generate persuasive pages, optimize conversions, and build trust instantly.</p>
          <div className="flex items-center gap-4 p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
            <div className="h-12 w-12 rounded-full bg-white text-[#00236f] flex items-center justify-center"><TrendingUp /></div>
            <div><p className="uppercase text-xs tracking-wider text-blue-200">Conversion Rate</p><p className="text-xl font-semibold">+24.8% increase this quarter</p></div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-12 py-20 bg-white">
        <div className="max-w-md w-full">
          <div className="lg:hidden flex items-center gap-2 mb-8"><BarChart3 className="text-[#00236f]" /><span className="text-2xl font-black text-[#00236f]">SalesAI</span></div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Welcome back</h2>
          <p className="text-slate-500 mb-8">Please enter your credentials to access your dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase text-slate-500">Email Address</label>
              <div className="relative mt-2">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="demo@aisales.com" className="w-full border border-slate-300 rounded-xl px-4 py-4 pr-12" />
                <Mail className="absolute right-4 top-4 text-slate-400" size={18} />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-slate-500">Password</label>
              <div className="relative mt-2">
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="123456" className="w-full border border-slate-300 rounded-xl px-4 py-4 pr-12" />
                <Lock className="absolute right-4 top-4 text-slate-400" size={18} />
              </div>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-[#00236f] text-white font-semibold flex justify-center items-center gap-2">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="my-8 border-t" />
          <div className="text-center text-sm text-slate-500">Demo Account: <span className="font-semibold">demo@aisales.com / 123456</span></div>
          <div className="mt-8 text-center text-slate-500">Don't have an account?<Link href="/register" className="text-indigo-600 font-semibold ml-1">Sign up for free</Link></div>
        </div>
      </div>
    </main>
  )
}