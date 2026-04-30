'use client'

import { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import StatsCards from '@/components/dashboard/StatsCards'
import SavedPageCard from '@/components/dashboard/SavedPageCard'
import { getSavedPages, deletePage } from '@/lib/storage'

export default function DashboardPage() {
  const [pages, setPages] = useState<any[]>([])
  const [selectedPage, setSelectedPage] = useState<any>(null)

  useEffect(() => {
    setPages(getSavedPages())
  }, [])

  const handleDelete = (index: number) => {
    deletePage(index)
    setPages(getSavedPages())
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen flex bg-slate-100 mt-20 md:mt-0">
        <DashboardSidebar />
        <section className="flex-1 p-8">
          <StatsCards total={pages.length} />

          {pages.length === 0 && (
            <div className="bg-white rounded-3xl p-20 text-center text-slate-400">
              No generated pages yet. Start creating your first AI sales page.
            </div>
          )}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {pages.map((item, i) => (
              <SavedPageCard key={i} item={item} onDelete={() => handleDelete(i)} onView={() => setSelectedPage(item)} />
            ))}
          </div>
        </section>
        {selectedPage && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6">
            <div className="bg-white max-w-3xl w-full rounded-3xl p-8 max-h-[90vh] overflow-auto">
              <h1 className="text-4xl font-bold">{selectedPage.generated.headline}</h1>
              <p className="mt-4">{selectedPage.generated.description}</p>
              <button onClick={() => setSelectedPage(null)} className="mt-10 text-center border-blue-400 border shadow-lg text-blue-500 cursor-pointer w-full px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        )}
      </main>
    </ProtectedRoute>
  )
}