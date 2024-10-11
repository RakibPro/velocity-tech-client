/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1400px',
            },
            colors: {
                primary: '#eeb644',
                secondary: '#d8d8d8',
            },
            fontFamily: {
                oswald: ['Oswald'],
                poppins: ['Poppins'],
            },
            backgroundImage: {
                discount: "url('/src/assets/discount/bg-discount.jpg')",
            },
        },
    },
    plugins: [require('daisyui')],
};
