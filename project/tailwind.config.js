/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                text: "#eeedff",
                primary: "#12363e",
                secondary: "#194748",
            },
            fontFamily: {
                spaceGrotesk: ["Space Grotesk", "sans-serif"],
            },
        },
    },
    plugins: [],
};
