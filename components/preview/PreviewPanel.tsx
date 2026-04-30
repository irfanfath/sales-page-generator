'use client'

import { RefreshCcw } from 'lucide-react'
import MinimalTemplate from '@/components/templates/MinimalTemplate'
import DarkTemplate from '@/components/templates/DarkTemplate'
import GradientTemplate from '@/components/templates/GradientTemplate'
import LoadingPreview from './LoadingPreview'
import { toast } from 'sonner'

export default function PreviewPanel({ loading, generated, template, aiMessage, onRegenHeadline, onRegenCTA }: any) {
  if (loading) return <div className="bg-white rounded-3xl shadow-xl p-8 min-h-[700px]"><LoadingPreview message={aiMessage} /></div>

  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 min-h-[700px] overflow-auto">
      {!generated && <div className="h-full flex items-center justify-center text-slate-400 text-xl">Your generated landing page preview will appear here.</div>}

      {generated && (
        <>
          {template === 'minimal' && <MinimalTemplate generated={generated} onCTA={()=>toast.success('Lead captured successfully!')} />}
          {template === 'dark' && <DarkTemplate generated={generated} />}
          {template === 'gradient' && <GradientTemplate generated={generated} />}

          <div className="grid grid-cols-2 gap-4 mt-8">
            <button onClick={onRegenHeadline} className="py-3 rounded-2xl bg-slate-200 flex justify-center gap-2 cursor-pointer"><RefreshCcw size={18}/> Regenerate Headline</button>
            <button onClick={onRegenCTA} className="py-3 rounded-2xl bg-slate-200 flex justify-center gap-2 cursor-pointer"><RefreshCcw size={18}/> Regenerate CTA</button>
          </div>
        </>
      )}
    </section>
  )
}