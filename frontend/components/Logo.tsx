import { HeartPulse } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600 text-white shadow-sm">
        <HeartPulse size={21} />
      </div>
      <div>
        <div className="text-[15px] font-bold tracking-tight text-ink">MediAssist</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-600">AI Health</div>
      </div>
    </div>
  );
}