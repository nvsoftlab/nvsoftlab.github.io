export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        party: {
          bg: "#0f0a1e",
          bgmid: "#1a0f3a",
          orange: "#f97316",
          purple: "#a855f7",
          muted: "#c4b5fd",
        },
      },
    },
  },
  plugins: [],
};
