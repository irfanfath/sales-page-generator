export default function GradientTemplate({ generated, onCTA }: any) {
  return (
    <div className="rounded-3xl p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white space-y-14 animate-fadein">
      <section className="text-center py-12">
        <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm mb-5">Fastest Way to Convert Visitors</div>
        <h1 className="text-5xl font-bold">{generated.headline}</h1>
        <p className="mt-5 text-xl">{generated.subheadline}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        {generated.benefits.map((b:string,i:number)=><div key={i} className="p-6 rounded-3xl bg-white/20">{b}</div>)}
      </section>

      <section className="grid md:grid-cols-2 gap-5">
        {generated.features.map((f:string,i:number)=><div key={i} className="p-6 rounded-3xl bg-white/20">{f}</div>)}
      </section>

      <section className="bg-white/20 rounded-3xl p-10 text-center">
        “Beautifully simple. Exceptionally effective.”
      </section>

      <section className="text-center py-12 rounded-3xl bg-white text-black">
        <h2 className="text-4xl font-bold">{generated.pricingText}</h2>
        <button onClick={onCTA} className="mt-8 px-10 py-4 rounded-2xl bg-black text-white">{generated.ctaText}</button>
      </section>
    </div>
  )
}