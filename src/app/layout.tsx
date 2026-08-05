import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'MindsEcho AI | Creator Long-Term Memory Agent',
  description: 'AI Agent with long-term memory for creators',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0d0f17] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
