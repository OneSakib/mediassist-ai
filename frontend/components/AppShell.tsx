"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FileText, History, LayoutDashboard, LogOut, MessageSquare, Plus, UserRound } from "lucide-react";
import Logo from "./Logo";
import { chats } from "@/data/mockData";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const newChat = () => router.push(`/chat/${crypto.randomUUID()}`);

  const nav = [
    ["/dashboard", LayoutDashboard, "Dashboard"],
    ["/reports", FileText, "Reports"],
    ["/history", History, "Health History"],
    ["/profile", UserRound, "Profile"],
  ] as const;

  return (
    <div className="min-h-screen bg-mist">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[270px] border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="px-6 py-5"><Logo /></div>
        <div className="px-4">
          <button onClick={newChat} className="btn-primary w-full">
            <Plus size={18} /> New consultation
          </button>
        </div>

        <nav className="mt-6 space-y-1 px-3">
          {nav.map(([href, Icon, label]) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${active ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50"}`}>
                <Icon size={18} /> {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-7 px-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Recent chats</span>
            <MessageSquare size={14} className="text-slate-400" />
          </div>
          <div className="space-y-1">
            {chats.slice(0, 4).map(chat => (
              <Link key={chat.id} href={`/chat/${chat.id}`} className="block rounded-xl px-3 py-2 hover:bg-slate-50">
                <p className="truncate text-sm font-semibold text-slate-700">{chat.title}</p>
                <p className="truncate text-xs text-slate-400">{chat.preview}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">SM</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">Sakib Malik</p>
              <p className="truncate text-xs text-slate-400">sakib@example.com</p>
            </div>
            <button title="Logout" onClick={() => router.push("/login")}><LogOut size={16} className="text-slate-400" /></button>
          </div>
        </div>
      </aside>

      <main className="lg:pl-[270px]">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur lg:px-8">
          <div className="lg:hidden"><Logo /></div>
          <div className="hidden text-sm text-slate-500 lg:block">Personal health workspace</div>
          <div className="flex items-center gap-3">
            <Link href="/terms" className="hidden text-xs font-semibold text-slate-500 hover:text-teal-600 sm:block">Safety & Terms</Link>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">SM</div>
          </div>
        </header>
        <div className="p-4 pb-10 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}