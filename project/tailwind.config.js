/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#020205",
                text: "#F2EFFF",
                primary: "#4A22FF",
                secondary: "#190089",
            },
            fontFamily: {
                spaceGrotesk: ["Space Grotesk", "sans-serif"],
            },
        },
    },
    plugins: [],
};
