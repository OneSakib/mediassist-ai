import Link from "next/link";
import { Activity, ArrowRight, FileText, MessageCircle, Plus, ShieldCheck } from "lucide-react";
import AppShell from "@/components/AppShell";
import SafetyBanner from "@/components/SafetyBanner";
import { reports, chats } from "@/data/mockData";
export default function DashboardPage() {
  return <AppShell>
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="eyebrow">Personal health workspace</p><h1 className="mt-1 text-3xl font-bold tracking-tight text-ink">Good afternoon, Sakib</h1><p className="mt-1 text-sm text-slate-500">Here’s a simple overview of your recent health activity.</p></div>
        <Link href={`/chat/${crypto.randomUUID()}`} className="btn-primary"><Plus size={18} /> Start consultation</Link>
      </div>

      <SafetyBanner />

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Last consultation", "2 days ago", MessageCircle],
          ["Medical reports", String(reports.length), FileText],
          ["Active concerns", "1", Activity]
        ].map(([label, value, Icon]) => <div className="card p-5" key={String(label)}><div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500">{label}</p><Icon size={19} className="text-teal-600" /></div><p className="mt-3 text-2xl font-bold text-ink">{String(value)}</p></div>)}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <section className="card p-5 sm:p-6">
          <div className="flex items-center justify-between"><div><p className="eyebrow">Recent concern</p><h2 className="mt-1 text-xl font-bold">Fever & Headache</h2></div><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">Needs review</span></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[["Duration", "2 days"], ["Temperature", "102°F"], ["Symptoms", "Fever, headache, body pain"]].map(([a, b]) => <div className="rounded-xl bg-slate-50 p-3" key={a}><p className="text-xs font-semibold text-slate-400">{a}</p><p className="mt-1 text-sm font-bold text-slate-700">{b}</p></div>)}
          </div>
          <div className="mt-5 rounded-xl border border-slate-100 p-4"><p className="text-sm font-bold">Informational summary</p><p className="mt-1 text-sm leading-6 text-slate-500">Several conditions can cause this symptom pattern. A confirmed cause requires clinical assessment and, where appropriate, testing.</p></div>
          <Link href="/chat/chat-1" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700">View conversation <ArrowRight size={16} /></Link>
        </section>

        <section className="card p-5 sm:p-6">
          <div className="flex items-center justify-between"><div><p className="eyebrow">Recent reports</p><h2 className="mt-1 text-xl font-bold">Your documents</h2></div><Link href="/reports" className="text-xs font-bold text-teal-700">View all</Link></div>
          <div className="mt-4 space-y-3">{reports.slice(0, 3).map(r => <div key={r.id} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-600"><FileText size={18} /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{r.name}</p><p className="text-xs text-slate-400">{r.type} · {r.date}</p></div><span className="text-[10px] font-bold text-teal-600">{r.status}</span></div>)}</div>
        </section>
      </div>

      <section className="card p-5 sm:p-6">
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-600"><ShieldCheck size={19} /></div><div><h2 className="font-bold">Your health information</h2><p className="text-xs text-slate-500">Use the assistant to organize information, not to replace medical care.</p></div></div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{chats.map(c => <Link href={`/chat/${c.id}`} key={c.id} className="rounded-xl border border-slate-100 p-3 hover:border-teal-200 hover:bg-teal-50/30"><p className="text-sm font-bold">{c.title}</p><p className="mt-1 truncate text-xs text-slate-400">{c.preview}</p><p className="mt-2 text-[10px] font-semibold text-slate-400">{c.date}</p></Link>)}</div>
      </section>
    </div>
  </AppShell>;

}