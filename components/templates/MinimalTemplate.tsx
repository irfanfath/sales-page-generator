export default function MinimalTemplate({ generated }: any) {
  return (
    <div className="space-y-10">
      <div className="text-center py-10 border-b">
        <h1 className="text-5xl font-bold">{generated.headline}</h1>
        <p className="mt-4 text-xl text-slate-500">{generated.subheadline}</p>
      </div>

      <p className="text-lg leading-8">{generated.description}</p>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why Customers Love It</h2>
        <ul className="space-y-3">
          {generated.benefits.map((b: string, i: number) => (
            <li key={i}>✓ {b}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {generated.features.map((f: string, i: number) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-100">{f}</div>
          ))}
        </div>
      </div>

      <div className="text-center py-10 rounded-3xl bg-black text-white">
        <h2 className="text-3xl font-bold">{generated.pricingText}</h2>
        <button className="mt-6 px-8 py-4 rounded-2xl bg-white text-black">{generated.ctaText}</button>
      </div>
    </div>
  )
}