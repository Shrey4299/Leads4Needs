module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },

      fontFamily : {
        // smooch : ['Smooch']
        lora : "'Lora', serif",
        smooch : "'Smooch', serif",
        abril : "'Abril Fatface', serif",
        nautiga : "'The Nautigal', cursive",
        
      },


      
    },
  },
  plugins: [],
};
