/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                cyan: {
                    550: '#438eb9',
                    650: '#266cad',
                    1000: 'rgba(255,255,255,.1)',
                },
                zinc: {
                    550: '#585858',
                },
                red: {
                    550: '#d15b47',
                    650: '#d64830',
                },
                green: {
                    550: '#87b87f',
                },
                grey: {
                    450: '#c6c6c6',
                },
                blue: {
                    550: '#458fbc',
                },
            },
        },
        fontFamily: {
            titles: ['ProximaNovaRegular', 'Helvetica', 'Arial'],
        },
    },
    plugins: [],
}
