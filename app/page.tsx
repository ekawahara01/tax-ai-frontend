import Calculator from '../components/Calculator';
import Link from 'next/link';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="bg-white border-b border-slate-100 py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
            <Zap size={12} />
            <span>ENTERPRISE GRADE PRECISION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-black text-brand-navy mb-6 tracking-tight">
            Professional 1099 Tax AI <br/><span className="text-blue-600">Efficiency Engine.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            Calculate your Finance metrics with 99.9% accuracy using our validated logical templates. 
          </p>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-slate-100">
               <Calculator />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
               <ShieldCheck className="text-emerald-600 mb-4" size={32} />
               <h3 className="font-bold text-lg mb-2">Verified Logic</h3>
               <p className="text-slate-500 text-sm">Every calculation follows the latest industry standards for Finance.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
               <Cpu className="text-blue-600 mb-4" size={32} />
               <h3 className="font-bold text-lg mb-2">Edge Computing</h3>
               <p className="text-slate-500 text-sm">Real-time localized processing for over 7 regions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
               <Zap className="text-gold-600 mb-4" size={32} />
               <h3 className="font-bold text-lg mb-2">Instant ROI</h3>
               <p className="text-slate-500 text-sm">Built-in integration with <strong>Collective/TurboTax</strong> for immediate execution.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
