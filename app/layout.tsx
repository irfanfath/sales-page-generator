import './globals.css'
import { Toaster } from 'sonner'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        <div className="fixed top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>
        <div className="fixed bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20"></div>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}