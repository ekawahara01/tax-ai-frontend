'use client';
import { useState } from 'react';
import { calculate } from '../lib/logic';
import { ChevronRight } from 'lucide-react';

export default function Calculator({ initialLabel = 'Base' }: { initialLabel?: string }) {
  const [inputs, setInputs] = useState({
    v1: 1000,
    v2: 5,
    v3: 2,
    v4: 1,
    v5: 1
  });
  
  const { result, label, details } = (calculate as any)(inputs.v1, inputs.v2, inputs.v3, inputs.v4, inputs.v5);

  const update = (key: string, val: number) => setInputs(prev => ({ ...prev, [key]: val }));

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
        <div className="space-y-6">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Input Parameters</h4>
            <div className="space-y-4">
                <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Primary Value (Annual Income)</label>
                    <input type="number" value={inputs.v1} onChange={e => update('v1', Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Regional Factor (Tax %)</label>
                    <input type="number" value={inputs.v2} onChange={e => update('v2', Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Var X</label>
                        <input type="number" value={inputs.v3} onChange={e => update('v3', Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-brand-navy p-8 rounded-2xl text-white flex flex-col justify-between shadow-2xl">
            <div>
                <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">{label}</div>
                <div className="text-5xl font-outfit font-black mb-6">${result.toLocaleString()}</div>
                
                <div className="space-y-2">
                    {details?.map((d: string, i: number) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-slate-400">
                            <div className="w-1 h-1 bg-blue-500 rounded-full" />
                            <span>{d}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <button className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:translate-y-[-2px]">
                <span>Deploy with Managed Services</span>
                <ChevronRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
}
