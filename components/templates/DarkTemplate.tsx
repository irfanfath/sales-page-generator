export default function DarkTemplate({ generated }: any) {
  return (
    <div className="bg-slate-950 text-white rounded-3xl p-8 space-y-10 min-h-full animate-fadein">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold">{generated.headline}</h1>
        <p className="mt-4 text-xl text-slate-400">{generated.subheadline}</p>
      </div>
      <p className="text-lg leading-8 text-slate-300">{generated.description}</p>
      <div className="grid gap-4">{generated.features.map((f:string,i:number)=><div key={i} className="p-5 rounded-2xl bg-slate-800">{f}</div>)}</div>
      <div className="text-center py-12 rounded-3xl bg-indigo-600">
        <h2 className="text-3xl font-bold">{generated.pricingText}</h2>
        <button className="mt-6 px-8 py-4 rounded-2xl bg-white text-black">{generated.ctaText}</button>
      </div>
    </div>
  )
}