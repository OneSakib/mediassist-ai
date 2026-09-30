import { ShieldAlert } from "lucide-react";

export default function SafetyBanner() {
  return (
    <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
      <div className="mt-0.5 text-amber-600"><ShieldAlert size={20} /></div>
      <div>
        <p className="text-sm font-bold text-amber-900">Important health information</p>
        <p className="mt-1 text-xs leading-5 text-amber-800">
          MediAssist AI provides general information based on the information you provide.
          It does not diagnose disease or replace a qualified healthcare professional.
          Consult a doctor before taking, stopping, or changing medication.
        </p>
      </div>
    </div>
  );
}