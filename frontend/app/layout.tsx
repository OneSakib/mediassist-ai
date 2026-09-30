import "./globals.css";

export const metadata = {
  title: "MediAssist AI",
  description: "AI-powered health information assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}