'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [pages, setPages] = useState<any[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved-sales-pages') || '[]')
    setPages(saved)
  }, [])

  return (
    <main className="min-h-screen p-8 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">My Generated Sales Pages</h1>
          <Link href="/generator" className="px-6 py-3 rounded-2xl bg-black text-white">+ New Generate</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pages.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="text-xl font-bold">{item.productName}</h2>
              <p className="text-slate-500 mt-2">{item.generated.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}