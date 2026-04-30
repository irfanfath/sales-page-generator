'use client'

import { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import ProductInputForm from '@/components/forms/ProductInputForm'
import PreviewPanel from '@/components/preview/PreviewPanel'
import { mockGenerateSalesCopy } from '@/lib/mock-ai'
import { savePage } from '@/lib/storage'
import { exportHTML } from '@/lib/export-html'
import { toast } from 'sonner'

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
    if (!generated) return toast.error('Generate first')
    savePage({ ...form, generated })
    toast.success('Sales page saved successfully')
  }

  const handleExport = () => {
    if (!generated) return toast.error('Generate first')
    exportHTML(form.productName, generated)
  }

  const regenerateHeadline = () => {
    if (!generated) return
    setGenerated({ ...generated, headline: `Experience the Future of ${form.productName}` })
  }

  const regenerateCTA = () => {
    if (!generated) return
    setGenerated({ ...generated, ctaText: 'Claim Your Advantage Today' })
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen flex bg-slate-100">
        <DashboardSidebar />
        <section className="flex-1 p-4 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <ProductInputForm
              form={form}
              setForm={setForm}
              onGenerate={handleGenerate}
              onSave={handleSave}
              onExport={handleExport}
            />

            <PreviewPanel
              loading={loading}
              generated={generated}
              template={form.template}
              aiMessage={aiMessage}
              onRegenHeadline={regenerateHeadline}
              onRegenCTA={regenerateCTA}
            />
          </div>
        </section>
      </main>
    </ProtectedRoute>
  )
}