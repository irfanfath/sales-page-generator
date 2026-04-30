export default function GradientTemplate({ generated }: any) {
  return (
    <div className="rounded-3xl p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white space-y-10 min-h-full">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold">{generated.headline}</h1>
        <p className="mt-4 text-xl">{generated.subheadline}</p>
      </div>

      <p className="text-lg leading-8">{generated.description}</p>

      <div className="grid md:grid-cols-2 gap-4">
        {generated.features.map((f: string, i: number) => (
          <div key={i} className="p-5 rounded-2xl bg-white/20 backdrop-blur">{f}</div>
        ))}
      </div>

      <div className="text-center py-12 rounded-3xl bg-white text-black">
        <h2 className="text-3xl font-bold">{generated.pricingText}</h2>
        <button className="mt-6 px-8 py-4 rounded-2xl bg-black text-white">{generated.ctaText}</button>
      </div>
    </div>
  )
}