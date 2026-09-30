import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return <main className="min-h-screen bg-mist"><div className="mx-auto max-w-4xl px-5 py-10">
    <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-teal-600"><ArrowLeft size={16}/> Back to dashboard</Link>
    <div className="card p-6 sm:p-10">
      <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600"><ShieldAlert/></div><div><p className="eyebrow">Safety & terms</p><h1 className="text-3xl font-bold">Terms & Conditions</h1></div></div>
      <p className="mt-3 text-xs text-slate-400">Demo content · Last updated September 30, 2026</p>
      <div className="prose prose-slate mt-8 max-w-none text-sm leading-7">
        <h2>1. About MediAssist AI</h2><p>MediAssist AI is an AI-powered health information and symptom-assistance tool designed to help users organize symptoms, understand general health information and prepare questions for a healthcare professional.</p>
        <h2>2. Not a medical diagnosis</h2><p>MediAssist AI does not replace a qualified doctor, medical professional, emergency service or clinical examination. Information provided by the system should not be considered a confirmed diagnosis.</p>
        <h2>3. Medication</h2><p>Do not start, stop, change or combine medication based solely on information provided by MediAssist AI. Always consult a qualified healthcare professional before taking medication, particularly prescription medicines.</p>
        <h2>4. Medical reports</h2><p>Uploaded reports may contain sensitive health information. AI-generated interpretations are informational and should be reviewed by an appropriately qualified healthcare professional.</p>
        <h2>5. Emergency situations</h2><p>MediAssist AI should not be used for emergency care. If you experience a medical emergency or severe symptoms, seek immediate medical attention or contact your local emergency service.</p>
        <h2>6. Accuracy</h2><p>AI systems can make mistakes or misunderstand information. Verify important medical information with a qualified healthcare professional.</p>
        <h2>7. User responsibility</h2><p>Users are responsible for providing accurate information and seeking appropriate medical care.</p>
        <h2>8. Privacy</h2><p>Before real patient use, the application must implement appropriate privacy, security, consent, access-control, retention and data-protection measures required for its intended jurisdiction and use case.</p>
      </div>
    </div>
  </div></main>;
}