import { motion } from 'framer-motion'
import { Trash2, Eye, Pencil } from 'lucide-react'

export default function SavedPageCard({ item, onDelete, onView }: any) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-xl font-bold">{item.productName}</h2>
      <p className="text-slate-500 mt-2">{item.generated.headline}</p>

      <div className="flex gap-2 mt-5 flex-wrap">
        <button onClick={onView} className="px-4 py-2 rounded-xl bg-slate-200 flex gap-2 items-center cursor-pointer"><Eye size={16}/> View</button>
        <button onClick={onDelete} className="px-4 py-2 rounded-xl bg-red-500 text-white flex gap-2 items-center cursor-pointer"><Trash2 size={16}/> Delete</button>
      </div>
    </motion.div>
  )
}