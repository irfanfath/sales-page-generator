'use client'

import Link from 'next/link'
import { FileText, Sparkles, Trash2, BarChart3 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const [pages, setPages] = useState<any[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved-sales-pages') || '[]')
    setPages(saved)
  }, [])

  const handleDelete = (index:number) => {
    const saved = JSON.parse(localStorage.getItem('saved-sales-pages') || '[]')
    saved.splice(index,1)
    localStorage.setItem('saved-sales-pages', JSON.stringify(saved))
    setPages([...saved])
  }

  return (
    <main className="min-h-screen flex bg-slate-100">
      <aside className="w-72 bg-black text-white p-8 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">AI SalesGen</h1>
        <div className="space-y-4">
          <div className="flex gap-3"><BarChart3 /> Dashboard</div>
          <Link href="/generator" className="flex gap-3"><Sparkles /> Generate</Link>
          <div className="flex gap-3"><FileText /> Saved Pages</div>
        </div>
      </aside>

      <section className="flex-1 p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 shadow">Total Generated<br/><span className="text-4xl font-bold">{pages.length}</span></div>
          <div className="bg-white rounded-3xl p-6 shadow">Templates Available<br/><span className="text-4xl font-bold">3</span></div>
          <div className="bg-white rounded-3xl p-6 shadow">Export Ready<br/><span className="text-4xl font-bold">HTML</span></div>
        </div>

        {pages.length === 0 && (
          <div className="bg-white rounded-3xl p-20 text-center text-slate-400">
            No generated pages yet. Start creating your first AI sales page.
          </div>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pages.map((item, i) => (
            <motion.div whileHover={{ y: -5 }} key={i} className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold">{item.productName}</h2>
              <p className="text-slate-500 mt-2">{item.generated.headline}</p>
              <button onClick={()=>handleDelete(i)} className="mt-5 px-4 py-2 rounded-xl bg-red-500 text-white flex gap-2">
                <Trash2 size={16}/> Delete
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}