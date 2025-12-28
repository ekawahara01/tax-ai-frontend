/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#0F172A',
                    slate: '#334155',
                    gold: '#B45309',
                    emerald: '#065F46'
                }
            }
        },
    },
    plugins: [],
}
