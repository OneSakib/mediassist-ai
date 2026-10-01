"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, HeartPulse, LockKeyhole, Mail } from "lucide-react";
import { login, me } from '@/services/auth'
import { LoginPayload } from "@/types/auth";
import { useAuth } from "@/context/AuthContext";
export default function LoginPage() {
  const { setAuthToken, setAuthUser } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>('sakib@gmail.com');
  const [password, setPassword] = useState<string>('welcome2sakib');
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const payload: LoginPayload = {
        password,
        username: email,
      }
      const response = await login(payload);
      setAuthToken(response.access_token);
      const user = await me();
      setAuthUser(user);
      router.push("/dashboard");
    }
    catch (error) {
      console.error(
        error?.response?.data || error
      );

    }

  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-slate-50">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-2">
        <section className="hidden lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-600 text-white"><HeartPulse /></div>
            <div><h1 className="text-xl font-bold text-ink">MediAssist AI</h1><p className="text-xs font-semibold uppercase tracking-widest text-teal-600">AI Health</p></div>
          </div>
          <p className="eyebrow">Your health companion</p>
          <h2 className="mt-3 max-w-lg text-5xl font-bold leading-tight tracking-tight text-ink">Understand your symptoms. Prepare for better care.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">Organize symptoms, reports and health history in one private workspace and use AI to prepare questions for your healthcare professional.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Symptom chat", "Report history", "Health timeline"].map(x => <div key={x} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{x}</div>)}
          </div>
        </section>

        <section className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="lg:hidden mb-8"><div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-teal-600 text-white"><HeartPulse /></div><h1 className="text-2xl font-bold text-ink">MediAssist AI</h1></div>
          <p className="eyebrow">Welcome back</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">Sign in</h2>
          <p className="mt-2 text-sm text-slate-500">Continue to your personal health workspace.</p>
          <form onSubmit={submit} className="mt-7 space-y-4">
            <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-50" />
              </div>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-10 text-sm outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-50" /><Eye className="absolute right-3 top-3.5 text-slate-400" size={18} />
              </div>
            </label>
            <div className="flex justify-end"><button type="button" className="text-xs font-semibold text-teal-700">Forgot password?</button>
            </div>
            <button className="btn-primary w-full py-3">Sign in</button>
          </form>
          <p className="mt-6 text-center text-xs leading-5 text-slate-400">Demo frontend: authentication is mocked. Replace the submit handler with your backend API.</p>
        </section>
      </div>
    </main>
  );
}