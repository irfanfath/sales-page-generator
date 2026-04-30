export function Field({ label, placeholder, onChange, icon }: any) {
    return (
      <div>
        <label className="text-xs font-bold uppercase text-slate-400">{label}</label>
        <div className="mt-2 relative">
          <div className="absolute left-4 top-4 text-slate-400">{icon}</div>
          <input placeholder={placeholder} className="w-full pl-12 p-4 rounded-2xl border border-gray-200 bg-slate-50" onChange={onChange} />
        </div>
      </div>
    )
  }