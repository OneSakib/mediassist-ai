import { UserRound, Shield, HeartPulse } from "lucide-react";
import AppShell from "@/components/AppShell";
import { useAuth } from "@/context/AuthContext";
export default function ProfilePage() {
  const { user, logout } = useAuth()
  return <AppShell><div className="mx-auto max-w-4xl space-y-6">
    <div><p className="eyebrow">Account</p><h1 className="mt-1 text-3xl font-bold">My Profile</h1><p className="mt-1 text-sm text-slate-500">Demo patient information for the frontend.</p></div>
    <section className="card p-6"><div className="flex items-center gap-4"><div className="grid h-14 w-14 place-items-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">SM</div><div><h2 className="font-bold">Sakib Malik</h2><p className="text-sm text-slate-400">{user?.email}</p></div></div><div className="mt-7 grid gap-4 sm:grid-cols-2">{[["Date of birth", "•• / •• / ••••"], ["Blood group", "B+"], ["Height", "5'5\""], ["Weight", "70 kg"]].map(([a, b]) => <div className="rounded-xl bg-slate-50 p-4" key={a}><p className="text-xs font-semibold text-slate-400">{a}</p><p className="mt-1 font-bold">{b}</p></div>)}</div></section>
    <section className="grid gap-4 sm:grid-cols-2"><div className="card p-5"><HeartPulse className="text-teal-600" /><h2 className="mt-3 font-bold">Medical information</h2><p className="mt-1 text-sm text-slate-500">Known conditions: None added</p><p className="mt-1 text-sm text-slate-500">Allergies: None added</p><p className="mt-1 text-sm text-slate-500">Current medications: None added</p></div><div className="card p-5"><Shield className="text-teal-600" /><h2 className="mt-3 font-bold">Privacy</h2><p className="mt-1 text-sm leading-6 text-slate-500">This demo stores no real health data. Connect your own secure backend before using real patient information.</p></div></section>
  </div></AppShell>;
}