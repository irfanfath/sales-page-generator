import { RefreshCcw, Rocket, Wand2 } from "lucide-react"
import LoadingPreview from "./LoadingPreview"
import MinimalTemplate from "../templates/MinimalTemplate"
import DarkTemplate from "../templates/DarkTemplate"
import GradientTemplate from "../templates/GradientTemplate"
import { toast } from "sonner"

export function PreviewPanel({ loading, generated, template, aiMessage, onRegenHeadline, onRegenCTA }: any) {
  if (loading) return <div className="bg-white rounded-[32px] shadow-2xl p-8 min-h-[900px]"><LoadingPreview message={aiMessage} /></div>

  return (
    <section className="bg-white rounded-[32px] shadow-2xl min-h-[900px] overflow-hidden border border-slate-50">
      <div className="px-8 py-5 border-b flex justify-between items-center bg-slate-50 border-gray-400">
        <h2 className="font-black text-xl">Live Landing Page Preview</h2>
        <Rocket className="text-blue-800" />
      </div>

      <div className="p-8 overflow-auto">
        {!generated && <div className="h-[700px] flex items-center justify-center text-slate-400 text-xl">Your AI generated landing page will appear here.</div>}

        {generated && (
          <>
            {template === 'minimal' && <MinimalTemplate generated={generated} onCTA={()=>toast.success('Lead captured successfully!')} />}
            {template === 'dark' && <DarkTemplate generated={generated} />}
            {template === 'gradient' && <GradientTemplate generated={generated} />}

            <div className="grid md:grid-cols-2 gap-4 mt-10">
              <button onClick={onRegenHeadline} className="py-4 rounded-2xl bg-slate-100 flex justify-center gap-2 cursor-pointer font-semibold"><RefreshCcw/> Regenerate Headline</button>
              <button onClick={onRegenCTA} className="py-4 rounded-2xl bg-slate-100 flex justify-center gap-2 cursor-pointer font-semibold"><Wand2/> Regenerate CTA</button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}