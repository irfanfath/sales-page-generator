'use client'

import { motion } from 'framer-motion'
import { Trash2, Eye, BarChart3 } from 'lucide-react'

export default function SavedPageCard({ item, onDelete, onView }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[28px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all"
    >
      {/* Thumbnail */}
      <div className="h-44 bg-gradient-to-br from-blue-900 via-indigo-700 to-slate-900 relative p-6 text-white flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="text-[10px] uppercase bg-white/20 px-3 py-1 rounded-full tracking-widest">
            Published
          </span>
          <BarChart3 size={18} />
        </div>

        <div>
          <p className="text-xs opacity-70 mb-2">AI GENERATED LANDING PAGE</p>
          <h2 className="text-2xl font-bold line-clamp-2">{item.productName}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-slate-900 line-clamp-2">
          {item.generated.headline}
        </h3>

        <p className="text-xs text-slate-400 mt-2">
          {new Date(item.createdAt).toLocaleDateString()}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-6 text-center">
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-xs text-slate-400">Visitors</p>
            <p className="font-bold">1.2k</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-xs text-slate-400">Leads</p>
            <p className="font-bold">84</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={onView} className="cursor-pointer flex-1 py-3 rounded-xl bg-slate-100 flex justify-center gap-2">
            <Eye size={16}/> View
          </button>

          <button onClick={onDelete} className="cursor-pointer flex-1 py-3 rounded-xl bg-red-500 text-white flex justify-center gap-2">
            <Trash2 size={16}/> Delete
          </button>
        </div>
      </div>
    </motion.div>
  )
}