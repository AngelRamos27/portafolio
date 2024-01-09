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
      
    },
    'keyframes': {
        
      
    }



    },
    plugins: [],
  }
}

