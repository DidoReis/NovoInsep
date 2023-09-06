/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1C1B1F', // Cor primária para o tema dark
          secondary: '#313033', // Cor secundária para o tema dark
          cardBeneficio: "#404040",
          borderCard: "#938F99",
          button: "#FEAC39",
          divider: "#ffffff",
          footer: "#1C1B1F",
          hoverDark: "#ffffff",
          // Adicione outras cores personalizadas para o tema dark, se necessário
        },
        light: {
          primary: '#F5EEE4', // Cor primária para o tema light
          secondary: '#FFDFB3', // Cor secundária para o tema light]
          cardBeneficio: "#FFEED8",
          borderCard: "#46382F",
          button: "#31241E",
          divider: "#31241E",
          footer: "#28211D",
          hoverLight: "#000000"
          // Adicione outras cores personalizadas para o tema light, se necessário
        },

        active: {
          color: "#FEAC39"
        },

        border: {
          dark: "#938F99",
          light: "#46382F"
        },

       /*  primary: "#1C1B1F",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)", */
      },
      textColor: {
        dark: '#ffffff', // Cor do texto para o tema dark
        light: '#46382F', // Cor do texto para o tema light
        buttonDark: "#1C1B1F",
        buttonLight: "#FFF",
        seguirDark: "#000000",
        seguirLight: "#ffffff",

        
      },
      
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        heebo: ["Heebo", "sans-serif"]
      },
      
    },
    plugins:[
      function ({ addUtilities }) {
        const newUtilities = {
          '.no-ligatures': {
            fontFeatureSettings: "'clig' off, 'liga' off",
          },
        }
        addUtilities(newUtilities)
      }
    ],
     screens: {
      xxs: "320px",
      xs: "414px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      ipad: "1194px",
      lg: "1200px",
      xl: "1700px",
    }, 
  },
  plugins: [],
};