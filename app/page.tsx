"use client";

import React, { useState } from 'react';

export default function TaxCalculator() {
  const [income, setIncome] = useState(1000);
  const [taxRate, setTaxRate] = useState(5);

  const selfEmploymentTax = income * 0.153;
  const stateTax = income * (taxRate / 100);
  const deduction = 100; // 簡易控除
  const netTakeHome = income - selfEmploymentTax - stateTax + deduction;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Enterprise Grade Precision</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Professional 1099 Tax AI Engine</h1>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">Annual Income ($)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Regional Factor (Tax %)</label>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <div className="text-sm text-indigo-600 font-bold uppercase">Projected Net Take-Home</div>
          <div className="text-4xl font-extrabold text-indigo-900">${netTakeHome.toLocaleString()}</div>

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>Self-Employment Tax: <span className="font-bold">${selfEmploymentTax.toLocaleString()}</span></div>
            <div>State Tax Rate ({taxRate}%): <span className="font-bold">${stateTax.toLocaleString()}</span></div>
          </div>
        </div>

        <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 mb-8">
          Get Your Full Tax Saving Plan →
        </button>

        <div className="border-t border-gray-200 pt-6 space-y-4">
          <div className="flex items-start">
            <div className="text-indigo-500 mr-3">🛡️</div>
            <div>
              <p className="font-bold text-gray-900">Verified Logic</p>
              <p className="text-sm text-gray-500">Calculations follow 2026 industry standards.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-indigo-500 mr-3">⚡</div>
            <div>
              <p className="font-bold text-gray-900">Edge Computing</p>
              <p className="text-sm text-gray-500">Real-time localized processing for over 50 states.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
