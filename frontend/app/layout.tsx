import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
export const metadata = {
  title: "MediAssist AI",
  description: "AI-powered health information assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><AuthProvider>{children}</AuthProvider></body></html>;
}