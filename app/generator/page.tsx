'use client'

import { useEffect, useState } from 'react'
import { mockGenerateSalesCopy } from '@/lib/mock-ai'
import { Save, Sparkles, Download, RefreshCcw } from 'lucide-react'
import { toast } from 'sonner'
import { saveAs } from 'file-saver'
import MinimalTemplate from '@/components/templates/MinimalTemplate'
import DarkTemplate from '@/components/templates/DarkTemplate'
import GradientTemplate from '@/components/templates/GradientTemplate'
import { motion } from 'framer-motion'

export default function GeneratorPage() {
  const [form, setForm] = useState({
    productName: '',
    description: '',
    features: '',
    audience: '',
    price: '',
    usp: '',
    template: 'minimal',
  })

  const [generated, setGenerated] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [aiMessage, setAiMessage] = useState('Analyzing your product positioning...')

  const aiMessages = [
    'Analyzing your product positioning...',
    'Crafting persuasive headlines...',
    'Building customer-focused benefits...',
    'Designing conversion-ready CTA...',
  ]

  useEffect(() => {
    let interval:any
    if (loading) {
      let i = 0
      interval = setInterval(() => {
        i = (i + 1) % aiMessages.length
        setAiMessage(aiMessages[i])
      }, 700)
    }
    return () => clearInterval(interval)
  }, [loading])

  const handleGenerate = async () => {
    if (!form.productName || !form.description) return toast.error('Please complete the form')
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

  const handleExportHTML = () => {
    if (!generated) return
    const html = `
      <html>
        <head><title>${form.productName}</title></head>
        <body style="font-family:sans-serif;padding:40px;">
          <h1>${generated.headline}</h1>
          <h2>${generated.subheadline}</h2>
          <p>${generated.description}</p>
          <h3>${generated.pricingText}</h3>
        </body>
      </html>
    `
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
    saveAs(blob, `${form.productName}.html`)
  }

  const regenerateHeadline = () => {
    setGenerated({ ...generated, headline: `Experience the Future of ${form.productName}` })
  }

  const regenerateCTA = () => {
    setGenerated({ ...generated, ctaText: 'Claim Your Advantage Today' })
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

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

            <button onClick={handleGenerate} className="w-full py-4 rounded-2xl bg-black text-white flex justify-center gap-2"><Sparkles size={20}/> Generate Sales Page</button>
            <button onClick={handleSave} className="w-full py-4 rounded-2xl bg-indigo-600 text-white flex justify-center gap-2"><Save size={20}/> Save This Page</button>
            <button onClick={handleExportHTML} className="w-full py-4 rounded-2xl bg-emerald-600 text-white flex justify-center gap-2"><Download size={20}/> Export HTML</button>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 min-h-[700px] overflow-auto">
          {loading && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Sparkles size={50}/></motion.div>
              <p className="mt-6 text-xl font-semibold">{aiMessage}</p>
            </div>
          )}

          {!loading && generated && (
            <>
              {form.template === 'minimal' && <MinimalTemplate generated={generated} />}
              {form.template === 'dark' && <DarkTemplate generated={generated} />}
              {form.template === 'gradient' && <GradientTemplate generated={generated} />}

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button onClick={regenerateHeadline} className="py-3 rounded-2xl bg-slate-200 flex justify-center gap-2"><RefreshCcw size={18}/> Regenerate Headline</button>
                <button onClick={regenerateCTA} className="py-3 rounded-2xl bg-slate-200 flex justify-center gap-2"><RefreshCcw size={18}/> Regenerate CTA</button>
              </div>
            </>
          )}

          {!loading && !generated && <div className="h-full flex items-center justify-center text-slate-400 text-xl">Your generated landing page preview will appear here.</div>}
        </section>
      </div>
    </main>
  )
}