export default function StatsCards({ total }: { total:number }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white rounded-3xl p-6 shadow">Total Generated<br/><span className="text-4xl font-bold">{total}</span></div>
      <div className="bg-white rounded-3xl p-6 shadow">Templates Available<br/><span className="text-4xl font-bold">3</span></div>
      <div className="bg-white rounded-3xl p-6 shadow">Export Ready<br/><span className="text-4xl font-bold">HTML</span></div>
    </div>
  )
}