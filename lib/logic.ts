
export function calculate(income: number, state: string, dependents: number, filingStatus: string, businessType: string) {
    // Advanced LLC Tax Logic
    const baseRate = state === 'California' ? 0.08 : 0.05;
    const businessDeduction = businessType === 'LLC' ? 0.20 : 0.10;
    const dependentCredit = dependents * 2000;

    const selfEmploymentTax = income * 0.153;
    const taxableIncome = (income - (income * businessDeduction)) - dependentCredit;
    const stateTax = Math.max(0, taxableIncome * baseRate);

    const totalTax = selfEmploymentTax + stateTax;
    const afterTax = income - totalTax;

    return {
        result: afterTax,
        label: 'Projected Net Take-Home',
        details: [
            `Self-Employment Tax: $${selfEmploymentTax.toLocaleString()}`,
            `State Tax Rate (${state}): ${(baseRate * 100).toFixed(1)}%`,
            `Qualified Biz Deduction: $${(income * businessDeduction).toLocaleString()}`
        ]
    };
}
