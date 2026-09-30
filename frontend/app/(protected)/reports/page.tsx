 "use client";
import { FileText, Plus, UploadCloud } from "lucide-react";
import AppShell from "@/components/AppShell";
import SafetyBanner from "@/components/SafetyBanner";
import { reports } from "@/data/mockData";

export default function ReportsPage() {
  return <AppShell><div className="mx-auto max-w-6xl space-y-6">
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Documents</p><h1 className="mt-1 text-3xl font-bold">Medical Reports</h1><p className="mt-1 text-sm text-slate-500">Keep your reports organized for future conversations.</p></div><button className="btn-primary"><Plus size={18}/> Upload report</button></div>
    <SafetyBanner/>
    <div className="grid gap-4 md:grid-cols-2">{reports.map(r => <div className="card p-5" key={r.id}><div className="flex items-start gap-4"><div className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal-600"><FileText/></div><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><h2 className="font-bold">{r.name}</h2><p className="mt-1 text-xs text-slate-400">{r.type} · {r.date}</p></div><span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold text-teal-700">{r.status}</span></div>{r.values && <div className="mt-4 grid grid-cols-3 gap-2">{r.values.map(v => <div key={v.label} className="rounded-lg bg-slate-50 p-2"><p className="text-[10px] text-slate-400">{v.label}</p><p className="mt-1 text-xs font-bold">{v.value}</p></div>)}</div>}</div></div></div>)}</div>
    <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-8 text-center"><UploadCloud className="mx-auto text-slate-300" size={32}/><p className="mt-3 font-bold">Upload a new report</p><p className="mt-1 text-xs text-slate-400">PDF, JPG or PNG · Demo UI only</p></div>
  </div></AppShell>;
}