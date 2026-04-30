'use client'

import { Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SavedPageCard({ item, onDelete }: any) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-xl font-bold">{item.productName}</h2>
      <p className="text-slate-500 mt-2">{item.generated.headline}</p>
      <button onClick={onDelete} className="mt-5 px-4 py-2 rounded-xl bg-red-500 text-white flex gap-2">
        <Trash2 size={16}/> Delete
      </button>
    </motion.div>
  )
}