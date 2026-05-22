/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clinical: {
          ink: "#14213d",
          text: "#213547",
          muted: "#5d6b7a",
          line: "#d8e0e8",
          surface: "#f7fafc",
          accent: "#167a7f",
          accentDark: "#0f5f64",
          warning: "#b45309",
          danger: "#b91c1c"
        }
      },
      boxShadow: {
        soft: "0 10px 28px rgba(20, 33, 61, 0.08)"
      }
    }
  },
  plugins: []
};
