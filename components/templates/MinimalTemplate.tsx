export default function MinimalTemplate({ generated, onCTA }: any) {
  return (
    <div className="space-y-14 animate-fadein">
      <section className="text-center py-14 border-b">
        <div className="inline-block px-4 py-2 rounded-full bg-slate-100 text-sm mb-5">Trusted by 12,000+ customers</div>
        <h1 className="text-5xl font-bold leading-tight">{generated.headline}</h1>
        <p className="mt-5 text-xl text-slate-500">{generated.subheadline}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        {generated.benefits.map((b:string,i:number)=>(
          <div key={i} className="p-6 rounded-3xl bg-slate-50 shadow-sm">✓ {b}</div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Powerful Features</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {generated.features.map((f:string,i:number)=><div key={i} className="p-6 rounded-2xl border">{f}</div>)}
        </div>
      </section>

      <section className="bg-slate-100 rounded-3xl p-10 text-center italic text-lg">
        “This solution completely changed how we acquire customers online.”
        <div className="mt-4 not-italic font-semibold">— Happy Client Placeholder</div>
      </section>

      <section className="text-center py-12 rounded-3xl bg-black text-white">
        <h2 className="text-4xl font-bold">{generated.pricingText}</h2>
        <p className="mt-3 text-slate-300">Limited time early adopter access available now.</p>
        <button onClick={onCTA} className="mt-8 px-10 py-4 rounded-2xl bg-white text-black">{generated.ctaText}</button>
      </section>
    </div>
  )
}