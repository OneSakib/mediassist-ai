import { Chat, Message, Report } from "@/types";

export const chats: Chat[] = [
  { id: "chat-1", title: "Fever & Headache", preview: "Fever, headache and body pain", date: "Today" },
  { id: "chat-2", title: "Stomach Pain", preview: "Questions about abdominal discomfort", date: "Yesterday" },
  { id: "chat-3", title: "Headache", preview: "Recurring headache discussion", date: "Sep 25" },
  { id: "chat-4", title: "Vitamin Report", preview: "Understanding vitamin results", date: "Sep 18" }
];

export const reports: Report[] = [
  {
    id: "r1", name: "CBC Report.pdf", type: "Complete Blood Count", date: "Sep 28, 2026", status: "Analyzed",
    values: [["Hemoglobin", "13.2 g/dL"], ["WBC", "7,800 /µL"], ["Platelets", "185,000 /µL"]].map(([label, value]) => ({ label, value }))
  },
  { id: "r2", name: "Urine Routine.pdf", type: "Urine Routine", date: "Sep 12, 2026", status: "Ready" },
  { id: "r3", name: "Vitamin D.pdf", type: "Vitamin D", date: "Aug 20, 2026", status: "Analyzed",
    values: [{ label: "Vitamin D", value: "28 ng/mL" }] }
];

export const messages: Message[] = [
  { id: "m1", role: "assistant", content: "Hi Sakib. I can help you organize your symptoms and provide general health information. I’ll ask a few questions to better understand what you’re experiencing." },
  { id: "m2", role: "user", content: "I have fever and headache since yesterday. I also have some body pain." },
  { id: "m3", role: "assistant", content: "How high has your temperature been? Also, do you have chills, cough, vomiting, diarrhea, rash, or difficulty breathing?" },
  { id: "m4", role: "user", content: "My temperature was around 102°F. I have chills and body pain, but no cough." },
  { id: "m5", role: "assistant", content: "Thanks. Several conditions can cause this combination of symptoms, and symptoms alone cannot confirm the cause. Depending on your symptoms, exposure history and local factors, a clinician may decide whether blood testing is appropriate." }
];