/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moradoBg' : "#33105D",
        'moradoMedio':"#1b004b",
        "moradoOscuro":"#10002d",
        'moradoOscuro2': '#8D008F',
        "verde": "#317E0D",
        "amarilloOscuro": "#D0BD10",
        "amarilloMZ": "#DD8D16",
        "guinda": "#9F0D4B",
        "guindaClaro": "#E11143",
        "turquesa": "#27D4B5",
        "turquesaOscuro": "#0E8973",
        "naranja": "#CF6010",
        "negroPurpura": "#05000f",
        "rojoClaro": "#E11143"

      },

      fontFamily: {
        'ibm': ['IBM Plex Mono', 'monospace'],
      },
      'animation': {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
    },
    'keyframes': {
      'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
      },
      'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      }
  }



    },
    plugins: [],
  }
}

