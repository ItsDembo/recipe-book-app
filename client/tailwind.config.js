/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f2fcf5',
                    100: '#e1f8e8',
                    200: '#c3eed2',
                    300: '#95deb3',
                    400: '#5fc58e',
                    500: '#38a76b',
                    600: '#288654',
                    700: '#236b45',
                    800: '#1f553a',
                    900: '#1a4631',
                    950: '#0e271c',
                },
                secondary: {
                    50: '#fff8ed',
                    100: '#ffefd6',
                    200: '#ffdba8',
                    300: '#ffc070',
                    400: '#ff9d33',
                    500: '#ff7d0a',
                    600: '#f05e00',
                    700: '#c74500',
                    800: '#9f360a',
                    900: '#802e0c',
                    950: '#451504',
                },
                accent: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ec4899',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843',
                    950: '#500724',
                },
                background: '#fcfcfc',
                surface: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
