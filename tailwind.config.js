/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                wave: "wave 2.25s ease-in-out infinite",
            },
            keyframes: {
                wave: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "10%": {
                        transform: "rotate(14deg)",
                    },
                    "20%": {
                        transform: "rotate(-8deg)",
                    },
                    "30%": {
                        transform: "rotate(14deg)",
                    },
                    "40%": {
                        transform: "rotate(-4deg)",
                    },
                    "50%": {
                        transform: "rotate(10deg)",
                    },
                    "60%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },
            },
            backgroundOpacity: {
                15: "0.15",
            },
            colors: {
                gray: {
                    50: "#f9fafb",
                    100: "#eaeaeb",
                    200: "#cacbcd",
                    300: "#a7a9ac",
                    400: "#696c71",
                    500: "#282d34",
                    600: "#24292f",
                    700: "#181b20",
                    800: "#121518",
                    900: "#0c0e10",
                },
                primary: {
                    50: "#32a4ff",
                    100: "#289aff",
                    200: "#1e90ff",
                    300: "#1486ff",
                    400: "#0a7cff",
                    500: "#0072ff",
                    600: "#0068f5",
                    700: "#005eeb",
                    800: "#0054e1",
                    900: "#004ad7",
                },
            },
            fontFamily: {
                inter: ["Inter"],
                bricolage: ["Bricolage Grotesque"],
                roboto: ["Roboto"],
            },
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
}