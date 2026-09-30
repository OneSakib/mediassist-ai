 "use client";
import { useState } from "react";
import { ArrowLeft, Bot, FileUp, Menu, Paperclip, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import SafetyBanner from "@/components/SafetyBanner";
import { chats, messages } from "@/data/mockData";

export default function ChatPage({ params }: { params: { sessionId: string } }) {
  const chat = chats.find(c => c.id === params.sessionId) ?? chats[0];
  const [input, setInput] = useState("");
  const [items, setItems] = useState(messages);

  const send = () => {
    if (!input.trim()) return;
    setItems(prev => [...prev, { id: crypto.randomUUID(), role: "user", content: input }, { id: crypto.randomUUID(), role: "assistant", content: "Thanks. I’ve noted that information. In the connected backend, the medical assessment workflow will use your answers and relevant history to decide what follow-up information may be needed." }]);
    setInput("");
  };

  return <AppShell>
    <div className="mx-auto flex h-[calc(100vh-7rem)] max-w-7xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3"><Link href="/dashboard" className="rounded-lg p-2 hover:bg-slate-50"><ArrowLeft size={18}/></Link><div><h1 className="text-sm font-bold sm:text-base">{chat.title}</h1><p className="text-[11px] text-slate-400">AI health information assistant</p></div></div>
        <button className="rounded-lg p-2 hover:bg-slate-50"><Menu size={18}/></button>
      </div>
      <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 sm:p-7">
        <div className="mx-auto max-w-3xl space-y-5">
          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-4"><div className="flex gap-3"><Sparkles className="mt-0.5 text-teal-600" size={18}/><p className="text-xs leading-5 text-teal-900">I can help you organize symptoms and understand general health information. I cannot confirm a diagnosis or replace a doctor.</p></div></div>
          {items.map(m => <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}><div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.role === "user" ? "rounded-br-md bg-teal-600 text-white" : "rounded-bl-md border border-slate-200 bg-white text-slate-700"}`}>{m.role === "assistant" && <div className="mb-2 flex items-center gap-2 text-xs font-bold text-teal-700"><Bot size={15}/> MediAssist AI</div>}{m.content}</div></div>)}
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white p-3 sm:p-4">
        <div className="mx-auto max-w-3xl">
          <SafetyBanner />
          <div className="mt-3 flex items-end gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-teal-400">
            <button className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate-400 hover:bg-slate-50"><Paperclip size={18}/></button>
            <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} placeholder="Describe your symptoms..." rows={1} className="max-h-32 min-h-10 flex-1 resize-none border-0 bg-transparent px-1 py-2 text-sm outline-none"/>
            <button onClick={send} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-600 text-white hover:bg-teal-700"><Send size={17}/></button>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-400"><FileUp size={12}/> Demo mode · report upload will connect to your backend later</div>
        </div>
      </div>
    </div>
  </AppShell>;
}