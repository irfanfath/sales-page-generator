'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import StatsCards from '@/components/dashboard/StatsCards'
import SavedPageCard from '@/components/dashboard/SavedPageCard'
import { getSavedPages, deletePage } from '@/lib/storage'
import { Plus, Rocket, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DashboardPage() {
  const router = useRouter()
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
      <main className="min-h-screen flex bg-[#f5f7fb] relative overflow-hidden">
        <DashboardSidebar />

        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full pointer-events-none" />
        <div className="fixed bottom-0 left-80 w-[400px] h-[400px] bg-indigo-200/20 blur-3xl rounded-full pointer-events-none" />

        <section className="flex-1 px-6 md:px-10 pt-20 pb-20 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-blue-700 font-bold mb-3">
                ENTERPRISE CONTROL PANEL
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
                My Sales Funnels
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl">
                Manage, optimize and deploy all AI generated high-converting landing pages from one premium command center.
              </p>
            </div>

            <button
              onClick={() => router.push('/generator')}
              className="cursor-pointer flex items-center gap-3 bg-blue-900 text-white px-7 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all"
            >
              <Plus size={20} />
              Create New Funnel
            </button>
          </div>

          <StatsCards total={pages.length} />

          {pages.length === 0 && (
            <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-20 text-center border border-slate-200 shadow-xl mt-10">
              <Rocket className="mx-auto mb-6 text-blue-900" size={50} />
              <h2 className="text-2xl font-bold mb-3">No Generated Assets Yet</h2>
              <p className="text-slate-500 mb-8">
                Your premium AI landing pages will appear here after generation.
              </p>
              <button
                onClick={() => router.push('/generator')}
                className="cursor-pointer bg-blue-900 text-white px-8 py-4 rounded-2xl"
              >
                Generate First Sales Page
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
            {pages.map((item, i) => (
              <SavedPageCard
                key={i}
                item={item}
                onDelete={() => handleDelete(i)}
                onView={() => setSelectedPage(item)}
              />
            ))}
          </div>
        </section>

        <AnimatePresence>
          {selectedPage && (
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity:0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-6"
            >
              <motion.div
                initial={{ scale:.9, opacity:0 }}
                animate={{ scale:1, opacity:1 }}
                exit={{ scale:.9, opacity:0 }}
                className="bg-white rounded-[30px] max-w-5xl w-full max-h-[92vh] overflow-auto shadow-2xl"
              >
                <div className="flex justify-between items-center border-b px-8 py-5 sticky top-0 bg-white z-20">
                  <h2 className="font-bold text-xl">Sales Funnel Live Preview</h2>
                  <button onClick={() => setSelectedPage(null)} className="cursor-pointer">
                    <X />
                  </button>
                </div>

                <div className="p-10">
                  <div className="border rounded-3xl overflow-hidden shadow-inner">
                    <div className="h-10 bg-slate-100 border-b flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    <div className="p-12">
                      <h1 className="text-5xl font-black text-center mb-6">
                        {selectedPage.generated.headline}
                      </h1>
                      <p className="text-center text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                        {selectedPage.generated.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {selectedPage.generated.features?.map((f:any, idx:number)=>(
                          <div key={idx} className="p-6 bg-slate-50 rounded-2xl border">
                            {f}
                          </div>
                        ))}
                      </div>

                      <div className="text-center">
                        <button className="bg-blue-900 text-white px-10 py-4 rounded-2xl text-lg">
                          {selectedPage.generated.ctaText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </ProtectedRoute>
  )
}