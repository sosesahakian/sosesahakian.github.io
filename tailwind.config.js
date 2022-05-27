module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(5px)'
        },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      'open':{
        '0%': {
          top: '0.2rem',
          width: '0',
        },
        '5%': {
          width: '0'
        },
        '15%': {
          width: '230px'
        },
        '30%': {
          top:' 0.2rem',
          width: '230px',
        },
        '33%': {
          top: '0.2rem',
          width: '0'
        },
        '35%': {
          top: '0.2rem',
          width: '0',
        },
        '38%': {
          top: '-4.5rem'
          
        },
        '48%:': {
          top: '-4.5rem',
          width: '190px'
        },
        '62%': {
          top: '-4.5rem',
          width: '190px'
        },
        '66%': {
          top: '-4.5rem',
          width: '0',
        },
        '71% ':{
          top: '-9rem',
          width: '0'
        },
        '86%':{
          top: '-9rem',
          width: '285px',
        },
        '95%': {
          top: '-9rem',
          width: '285px',
        },
        '98%':{
          top: '-9rem',
          width: '0',
        },
        '100%': {
          top: '0',
          width:' 0',
        }
      },
      'appear': {
        'from': {
          opacity: '0',
        },
        'to': {
          opacity: '1'
        }
      },
      'effect': {
        '0%': {
          visibility: 'invisible'
        },
        '100%': {
          visibility: 'visible'
        }
      },
      'fade-up': {
        '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
        },
        '50%': {
            opacity: '0.5',
            transform: 'translateY(5px)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)'
        },
    },
    },
      animation: {
        'fade-in-up': 'fade-in-up 3s ease-out',
        'fade-up': 'fade-in-up 10s ease-out',
        'appear': 'ease-out 5s',
        'dunno': 'effect 10s 10s',
        'open': '5s ease-in-out'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("animated-tailwindcss"),
    require("react-parallax-scroll"),
    require("tailwindcss-animatecss"),
  ],
}
