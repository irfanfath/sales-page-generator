'use client'

import { useState } from 'react'
import { mockGenerateSalesCopy } from '@/lib/mock-ai'
import { motion } from 'framer-motion'
import { Save, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import MinimalTemplate from '@/components/templates/MinimalTemplate'
import DarkTemplate from '@/components/templates/DarkTemplate'
import GradientTemplate from '@/components/templates/GradientTemplate'

export default function GeneratorPage() {
    const [form, setForm] = useState({
        productName: '',
        description: '',
        features: '',
        audience: '',
        price: '',
        usp: '',
        tone: 'Professional',
        template: 'minimal',
    })

    const [generated, setGenerated] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const handleGenerate = async () => {
        setLoading(true)
        const result = await mockGenerateSalesCopy(form)
        setGenerated(result)
        setLoading(false)
    }

    const handleSave = () => {
        if (!generated) return
        const existing = JSON.parse(localStorage.getItem('saved-sales-pages') || '[]')
        existing.push({ ...form, generated })
        localStorage.setItem('saved-sales-pages', JSON.stringify(existing))
        toast.success('Sales page saved successfully')
    }

    return (
        <main className="min-h-screen bg-slate-100 p-4 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

                <section className="bg-white rounded-3xl shadow-xl p-8 h-fit">
                    <h1 className="text-3xl font-bold mb-8">AI Sales Page Builder</h1>

                    <div className="space-y-4">
                        <input placeholder="Product Name" className="w-full p-4 rounded-2xl border" onChange={(e) => setForm({ ...form, productName: e.target.value })} />
                        <textarea placeholder="Product Description" className="w-full p-4 rounded-2xl border" onChange={(e) => setForm({ ...form, description: e.target.value })} />
                        <input placeholder="Key Features (comma separated)" className="w-full p-4 rounded-2xl border" onChange={(e) => setForm({ ...form, features: e.target.value })} />
                        <input placeholder="Target Audience" className="w-full p-4 rounded-2xl border" onChange={(e) => setForm({ ...form, audience: e.target.value })} />
                        <input placeholder="Price" className="w-full p-4 rounded-2xl border" onChange={(e) => setForm({ ...form, price: e.target.value })} />
                        <input placeholder="Unique Selling Point" className="w-full p-4 rounded-2xl border" onChange={(e) => setForm({ ...form, usp: e.target.value })} />

                        <select className="w-full p-4 rounded-2xl border" onChange={(e) => setForm({ ...form, template: e.target.value })}>
                            <option value="minimal">Minimal White</option>
                            <option value="dark">Dark Premium</option>
                            <option value="gradient">SaaS Gradient</option>
                        </select>

                        <button onClick={handleGenerate} className="w-full py-4 rounded-2xl bg-black text-white flex justify-center gap-2">
                            <Sparkles size={20} /> Generate Sales Page
                        </button>

                        <button onClick={handleSave} className="w-full py-4 rounded-2xl bg-indigo-600 text-white flex justify-center gap-2">
                            <Save size={20} /> Save This Page
                        </button>
                    </div>
                </section>

                <section className="bg-white rounded-3xl shadow-xl p-8 min-h-[700px] overflow-auto">
                    {loading && (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                                <Sparkles size={50} />
                            </motion.div>
                            <p className="mt-6 text-xl font-semibold">AI is crafting your high-converting sales page...</p>
                        </div>
                    )}

                    {!loading && generated && (
                        <>
                            {form.template === 'minimal' && <MinimalTemplate generated={generated} />}
                            {form.template === 'dark' && <DarkTemplate generated={generated} />}
                            {form.template === 'gradient' && <GradientTemplate generated={generated} />}
                        </>
                    )}

                    {!loading && !generated && (
                        <div className="h-full flex items-center justify-center text-slate-400 text-xl">
                            Your generated landing page preview will appear here.
                        </div>
                    )}
                </section>
            </div>
        </main>
    )
}