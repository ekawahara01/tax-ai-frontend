import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: '1099 Tax AI | Official Enterprise Calculator',
  description: 'Professional grade Finance precision tool. Powered by Collective/TurboTax.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans bg-slate-50 text-brand-navy">
        <header className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-outfit font-extrabold text-2xl tracking-tighter text-brand-navy">
              1099<span className="text-blue-600">.</span>CORE
            </div>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-brand-navy transition">Tools</a>
              <a href="#" className="hover:text-brand-navy transition">Resources</a>
              <a href="#" className="bg-brand-navy text-white px-4 py-2 rounded-lg text-xs hover:bg-slate-800 transition">Partner Portal</a>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-brand-navy text-white py-12">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <div className="font-outfit font-bold text-xl mb-4">1099 Tax AI</div>
               <p className="text-slate-400 text-sm">Industrial grade calculation engine for Finance professionals.</p>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            © 2024 1099 Tax AI. All results are estimates. Powered by Collective/TurboTax.
          </div>
        </footer>
      </body>
    </html>
  );
}
