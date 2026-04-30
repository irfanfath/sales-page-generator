'use client'

import { motion } from 'framer-motion'

export default function StatsCards({ total }: { total:number }) {
  const stats = [
    { title:'TOTAL PAGES', value: total },
    { title:'MONTHLY VISITORS', value:'4.2K' },
    { title:'AVG CONVERSION', value:'3.8%' },
    { title:'REVENUE POTENTIAL', value:'$18.5K' },
  ]

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((s, i)=>(
        <motion.div
          key={i}
          whileHover={{ y:-4 }}
          className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm"
        >
          <p className="text-xs tracking-widest text-slate-400 font-bold mb-3">{s.title}</p>
          <h2 className="text-4xl font-black text-blue-900">{s.value}</h2>
        </motion.div>
      ))}
    </div>
  )
}