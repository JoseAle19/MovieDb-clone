/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      keyframes: {
        switch_today: {
          "0%": { transform: "translate(50px)" },
          "5%": { transform: "translate(47.5px)" },
          "10%": { transform: "translate(45px)" },
          "15%": { transform: "translate(42.5px)" },
          "20%": { transform: "translate(40px)" },
          "25%": { transform: "translate(37.5px)" },
          "30%": { transform: "translate(35px)" },
          "35%": { transform: "translate(32.5px)" },
          "40%": { transform: "translate(30px)" },
          "45%": { transform: "translate(27.5px)" },
          "50%": { transform: "translate(25px)" },
          "55%": { transform: "translate(22.5px)" },
          "60%": { transform: "translate(20px)" },
          "65%": { transform: "translate(17.5px)" },
          "70%": { transform: "translate(15px)" },
          "75%": { transform: "translate(12.5px)" },
          "80%": { transform: "translate(10px)" },
          "85%": { transform: "translate(7.5px)" },
          "90%": { transform: "translate(5px)" },
          "95%": { transform: "translate(2.5px)" },
          "100%": { transform: "translate(0px)" },
        },
        switch_week: {
          "0%": { transform: "translate(-50px)" },
          "5%": { transform: "translate(-47.5px)" },
          "10%": { transform: "translate(-45px)" },
          "15%": { transform: "translate(-42.5px)" },
          "20%": { transform: "translate(-40px)" },
          "25%": { transform: "translate(-37.5px)" },
          "30%": { transform: "translate(-35px)" },
          "35%": { transform: "translate(-32.5px)" },
          "40%": { transform: "translate(-30px)" },
          "45%": { transform: "translate(-27.5px)" },
          "50%": { transform: "translate(-25px)" },
          "55%": { transform: "translate(-22.5px)" },
          "60%": { transform: "translate(-20px)" },
          "65%": { transform: "translate(-17.5px)" },
          "70%": { transform: "translate(-15px)" },
          "75%": { transform: "translate(-12.5px)" },
          "80%": { transform: "translate(-10px)" },
          "85%": { transform: "translate(-7.5px)" },
          "90%": { transform: "translate(-5px)" },
          "95%": { transform: "translate(-2.5px)" },
          "100%": { transform: "translate(0px)" },
        },
        movies_opacityIn: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        movies_opacityOut: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 0,
          },
        },
      },

      animation: {
        switch_today: "switch_today .2s ease-in",
        switch_week: "switch_week .2s ease-in",
        fadeIn: "movies_opacityIn 1.2s linear",
        fadeOut: "movies_opacityOut 1.2s linear",
      },
    },
  },
  plugins: [],
};
