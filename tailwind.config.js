module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        pink:"#bf3c5f",
        maroon:"#800000",
        grey:"#3d527b",
        orange:"#F58025",
        gold:"#FFD580",
        lightpink:"#FFB6C1",
        lightgray:"#D3D3D3",
        lightblue:"#ADD8E6",
        lightred:"#FFCCCB",
        
        
      },
      fontFamily:{
        fruktur:["Dancing Script"],
        pacifico : ["Inconsolata"],

      }
    }
  },
  variants:{
    extend:{
    }
    
  },
  plugins: [],
}
