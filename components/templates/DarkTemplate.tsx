export default function DarkTemplate({ generated, onCTA }: any) {
  return (
    <div className="bg-slate-950 text-white rounded-3xl p-8 space-y-14 animate-fadein">
      <section className="text-center py-12">
        <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-5">AI Powered Premium Growth</div>
        <h1 className="text-5xl font-bold">{generated.headline}</h1>
        <p className="mt-5 text-xl text-slate-400">{generated.subheadline}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        {generated.benefits.map((b:string,i:number)=><div key={i} className="p-6 rounded-3xl bg-slate-900">{b}</div>)}
      </section>

      <section className="grid md:grid-cols-2 gap-5">
        {generated.features.map((f:string,i:number)=><div key={i} className="p-6 rounded-3xl bg-slate-800">{f}</div>)}
      </section>

      <section className="rounded-3xl bg-slate-900 p-10 text-center">
        “The smartest investment we made this year.”
      </section>

      <section className="text-center py-12 rounded-3xl bg-indigo-600">
        <h2 className="text-4xl font-bold">{generated.pricingText}</h2>
        <button onClick={onCTA} className="mt-8 px-10 py-4 rounded-2xl bg-white text-black">{generated.ctaText}</button>
      </section>
    </div>
  )
}