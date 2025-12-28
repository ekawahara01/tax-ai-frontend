'use client';

import React, { useState } from 'react';

export default function TaxCalculator() {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    // 簡易計算ロジック: 自営業税(15.3%) + 簡易連邦税(10%)
    const estimatedTax = income * 0.253;
    setTax(estimatedTax);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>1099 AI Tax Estimator</h1>
      <p>Estimate your 2026 self-employment taxes in seconds.</p>
      
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <label>Annual 1099 Income ($): </label>
        <input 
          type="number" 
          onChange={(e) => setIncome(Number(e.target.value))}
          style={{ padding: '8px', width: '100%', marginTop: '10px' }}
        />
        <button 
          onClick={calculateTax}
          style={{ marginTop: '20px', padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Calculate My Tax
        </button>
      </div>

      {tax > 0 && (
        <div style={{ marginTop: '30px', padding: '20px', background: '#f0f7ff', borderRadius: '8px' }}>
          <h2>Estimated Tax: ${tax.toLocaleString()}</h2>
          <p>Your net take-home: ${(income - tax).toLocaleString()}</p>
          <hr />
          <p><strong>💡 Want to save up to $10,000 in taxes?</strong></p>
          <p>If you earn over $60k, forming an S-Corp could significantly reduce your tax bill.</p>
          {/* ここにCollectiveのアフィリエイトリンクを貼る準備 */}
          <button style={{ padding: '10px', background: '#333', color: 'white', borderRadius: '5px' }}>
            Get a Free Tax Saving Analysis
          </button>
        </div>
      )}
    </div>
  );
}
