export type Chat = {
  id: string;
  title: string;
  preview: string;
  date: string;
};

export type Report = {
  id: string;
  name: string;
  type: string;
  date: string;
  status: "Analyzed" | "Ready" | "Processing";
  values?: { label: string; value: string }[];
};

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};