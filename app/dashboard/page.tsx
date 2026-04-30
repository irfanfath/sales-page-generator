'use client'

import { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import StatsCards from '@/components/dashboard/StatsCards'
import SavedPageCard from '@/components/dashboard/SavedPageCard'
import { getSavedPages, deletePage } from '@/lib/storage'

export default function DashboardPage() {
  const [pages, setPages] = useState<any[]>([])

  useEffect(() => {
    setPages(getSavedPages())
  }, [])

  const handleDelete = (index:number) => {
    deletePage(index)
    setPages(getSavedPages())
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen flex bg-slate-100">
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
              <SavedPageCard key={i} item={item} onDelete={() => handleDelete(i)} />
            ))}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  )
}