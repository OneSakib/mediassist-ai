import { CalendarDays, FileText, MessageCircle } from "lucide-react";
import AppShell from "@/components/AppShell";

const events = [
  ["Sep 28, 2026", "Fever & Headache", "Fever, headache and body pain", "CBC Report"],
  ["Sep 12, 2026", "Urinary discomfort", "Discussed urinary symptoms", "Urine Routine"],
  ["Aug 20, 2026", "Fatigue", "Discussed fatigue and general wellness", "Vitamin D"]
];

export default function HistoryPage() {
  return <AppShell><div className="mx-auto max-w-5xl space-y-6">
    <div><p className="eyebrow">Longitudinal record</p><h1 className="mt-1 text-3xl font-bold">Health History</h1><p className="mt-1 text-sm text-slate-500">A timeline of your demo consultations and reports.</p></div>
    <div className="card divide-y divide-slate-100">{events.map(([date,title,desc,report]) => <div className="flex gap-4 p-5 sm:p-6" key={date}><div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-600"><CalendarDays size={18}/></div><div className="min-w-0 flex-1"><p className="text-xs font-bold text-teal-600">{date}</p><h2 className="mt-1 font-bold">{title}</h2><p className="mt-1 text-sm text-slate-500">{desc}</p><div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600"><FileText size={14}/>{report}</div></div><MessageCircle className="hidden text-slate-300 sm:block" size={18}/></div>)}</div>
  </div></AppShell>;
}