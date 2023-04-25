/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#173D33', // verde
                secondary: '#386C5F', // verde claro
                darkgrey: '#A9A9A9', // text-gray-200- 300
                dimgrey: '#696969', // text-gray-400 -500 - 600
                whitesmoke: '#F5F5F5', // text-gray-100
                snow: '#FFFAFA', // text-gray-50
                neutral: '#1B1D22', // text-gray-900
                indigo: '#6366f1',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
            },
            height: {
                heroimg: '45rem',
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=light]'
                    ],
                    'base-200': '#000000',
                    'base-300': '#173D33',
                    accent: '#386C5F',
                    'text-success': '#4ade80',
                    'text-error-content': '#ff0000',
                    'info-focus': 'blue',
                },
                dark: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=dark]'
                    ],
                    'base-200': '#ffffff',
                    'base-300': '#173D33',
                    'text-base-100': '#ffffff',
                    'text-success': '#4ade80',
                    'text-error-content': '#DC143C',
                    accent: '#ffffff',
                    info: '#386C5F',
                },
            },
        ],
    },
    plugins: [require('@tailwindcss/forms'), require('daisyui')],
}
