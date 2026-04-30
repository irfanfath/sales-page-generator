'use client'

import { Save, Sparkles, Download } from 'lucide-react'

export default function ProductInputForm({ form, setForm, onGenerate, onSave, onExport }: any) {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 h-fit">
      <h1 className="text-3xl font-bold mb-8">AI Sales Page Builder</h1>
      <div className="space-y-4">
        <input placeholder="Product Name" className="w-full p-4 rounded-2xl border" onChange={(e)=>setForm({...form, productName:e.target.value})} />
        <textarea placeholder="Product Description" className="w-full p-4 rounded-2xl border" onChange={(e)=>setForm({...form, description:e.target.value})} />
        <input placeholder="Key Features (comma separated)" className="w-full p-4 rounded-2xl border" onChange={(e)=>setForm({...form, features:e.target.value})} />
        <input placeholder="Target Audience" className="w-full p-4 rounded-2xl border" onChange={(e)=>setForm({...form, audience:e.target.value})} />
        <input placeholder="Price" className="w-full p-4 rounded-2xl border" onChange={(e)=>setForm({...form, price:e.target.value})} />
        <input placeholder="Unique Selling Point" className="w-full p-4 rounded-2xl border" onChange={(e)=>setForm({...form, usp:e.target.value})} />

        <select className="w-full p-4 rounded-2xl border" onChange={(e)=>setForm({...form, template:e.target.value})}>
          <option value="minimal">Minimal White</option>
          <option value="dark">Dark Premium</option>
          <option value="gradient">SaaS Gradient</option>
        </select>

        <button onClick={onGenerate} className="w-full py-4 rounded-2xl bg-black text-white flex justify-center gap-2"><Sparkles size={20}/> Generate Sales Page</button>
        <button onClick={onSave} className="w-full py-4 rounded-2xl bg-indigo-600 text-white flex justify-center gap-2"><Save size={20}/> Save This Page</button>
        <button onClick={onExport} className="w-full py-4 rounded-2xl bg-emerald-600 text-white flex justify-center gap-2"><Download size={20}/> Export HTML</button>
      </div>
    </section>
  )
}