'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Wand2, LayoutTemplate } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-indigo-100">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">AI SalesGen</h1>
        <div className="flex gap-4">
          <Link href="/login" className="px-5 py-2 rounded-xl bg-white shadow">Login</Link>
          <Link href="/register" className="px-5 py-2 rounded-xl bg-black text-white">Get Started</Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Turn Raw Product Info Into <span className="text-indigo-600">High-Converting Sales Pages</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Generate persuasive landing page copy, polished layouts, and clear CTAs in seconds.
          </p>
          <Link href="/register" className="inline-block mt-8 px-8 py-4 rounded-2xl bg-black text-white text-lg">
            Generate My Sales Page
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="space-y-6 text-lg">
            <div className="flex gap-4 items-center"><Sparkles /> AI Copywriting Engine</div>
            <div className="flex gap-4 items-center"><LayoutTemplate /> Multi Landing Templates</div>
            <div className="flex gap-4 items-center"><Wand2 /> One Click Regeneration</div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}