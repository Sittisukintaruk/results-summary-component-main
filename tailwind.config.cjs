/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      Primary: {
        Lightred: "#FF5757",
        Orangeyyellow: "#FFB01F",
        Greenteal: "#00BD91",
        Cobaltblue: "#1125D4",
      },
      Neutral: {
        White: "#FFFFFF",
        aleblue: "#EBF1FF",
        Lightlavender: "#C8C7FF",
        Darkgrayblue: "#303B5A",
      },
    },
    fontSize: {
      sm: ["1rem", "20px"], //16px
      base: "1.125rem", //18px
      lg: ["1.5rem", "1.5rem"], //24px
      xl: ["2rem", "2rem"], //32px
      "2xl": "4.5rem", //72px
    },
    fontFamily: {
      sans: ["Hanken Grotesk", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
