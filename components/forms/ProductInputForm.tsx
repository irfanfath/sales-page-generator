'use client'

import { Save, Sparkles, Download, Rocket, Layers3, Wand2, BadgeDollarSign, Users2, Gem, RefreshCcw } from 'lucide-react'
import { Field } from './Field'

export function ProductInputForm({ form, setForm, onGenerate, onSave, onExport }: any) {
  return (
    <section className="bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden">
      <div className="px-8 py-7 border-b bg-gradient-to-r from-blue-950 to-blue-800 text-white">
        <h1 className="text-3xl font-black">Create Product Page</h1>
        <p className="text-blue-100 mt-2">Define your product identity to generate a conversion-focused landing page.</p>
      </div>

      <div className="p-8 grid md:grid-cols-2 gap-6">
        <Field icon={<Layers3 size={18} />} label="Product Name" placeholder="CloudScale AI" onChange={(e: any) => setForm({ ...form, productName: e.target.value })} />
        <Field icon={<Users2 size={18} />} label="Target Audience" placeholder="SaaS Founders" onChange={(e: any) => setForm({ ...form, audience: e.target.value })} />
        <Field icon={<BadgeDollarSign size={18} />} label="Price" placeholder="49" onChange={(e: any) => setForm({ ...form, price: e.target.value })} />
        <Field icon={<Gem size={18} />} label="Unique Selling Point" placeholder="AI automation advantage" onChange={(e: any) => setForm({ ...form, usp: e.target.value })} />

        <div className="md:col-span-2">
          <label className="text-xs font-bold uppercase text-slate-400">Product Description</label>
          <textarea className="mt-2 w-full p-4 rounded-2xl border bg-slate-50 min-h-[120px] border-gray-200" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-bold uppercase text-slate-400">Key Features</label>
          <input className="mt-2 border-gray-200 w-full p-4 rounded-2xl border bg-slate-50" placeholder="AI copywriting, analytics dashboard, CRM sync" onChange={(e) => setForm({ ...form, features: e.target.value })} />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-bold uppercase text-slate-400">Template Style</label>
          <select className="mt-2 w-full p-4 rounded-2xl border bg-slate-50 border-gray-200" onChange={(e) => setForm({ ...form, template: e.target.value })}>
            <option value="minimal">Minimal White</option>
            <option value="dark">Dark Premium</option>
            <option value="gradient">SaaS Gradient</option>
          </select>
        </div>
      </div>

      <div className="p-8 bg-slate-50 border-t border-gray-200 grid md:grid-cols-3 gap-4">
        <button onClick={onGenerate} className="cursor-pointer py-4 rounded-2xl bg-blue-900 text-white flex justify-center gap-2 font-bold"><Sparkles /> Generate Sales Page</button>
        <button onClick={onSave} className="cursor-pointer py-4 rounded-2xl bg-indigo-600 text-white flex justify-center gap-2 font-bold"><Save /> Save This Page</button>
        <button onClick={onExport} className="cursor-pointer py-4 rounded-2xl bg-emerald-600 text-white flex justify-center gap-2 font-bold"><Download /> Export HTML</button>
      </div>
    </section>
  )
}