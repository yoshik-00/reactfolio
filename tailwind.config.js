/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        //基本色
        body: "#ebe7e0",
        //選択時の色
        selectedText: "#A9A9A9",
        secondary: "#7F7F8F",
        badge: "#5b7f8d",
        inputBorder: "#565666",
        input: "#2A2A2A",
        customGray: "#D9D9D9",
      },
    },
    fontFamily: {
      NotoSerifJP: ["Noto Serif JP", "serif"],
      serif: ["serif"],
    },
  },
  plugins: [],
};
