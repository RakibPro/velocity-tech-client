/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#eeb644',
                secondary: '#d8d8d8',
            },
            fontFamily: {
                oswald: ['Oswald'],
            },
        },
    },
    plugins: [require('daisyui')],
};
