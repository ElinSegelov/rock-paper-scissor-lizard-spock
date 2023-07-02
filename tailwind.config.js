/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pentagon': "url(/src/assets/images/bg-pentagon.svg)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'radialGradient': 'hsl(214, 47%, 23%) to hsl(237, 49%, 15%)',
        'winnerGradiant': 'radial-gradient(circle at center, rgba(255, 255, 255, 0.7) 0, rgba(255, 255, 255, 0.5) 33%, rgba(255, 255, 255, 0.1) 67%, rgba(255, 255, 255, 0.05) 100%)'
      },
      backgroundSize: {
        '60': '60%'
      },
      boxShadow: {
        'inside': 'inset 0px 8px 1px 1px rgb(189, 186, 186)',
        'lizard': '0px 8px 1px 1px hsl(261, 73%, 52%)',
        'paper': '0px 8px 1px 1px hsl(230, 89%, 54%)',
        'rock': '0px 8px 1px 1px hsl(349, 71%, 44%)',
        'scissors': '0px 8px 1px 1px hsl(39, 89%, 41%)',
        'spock': '0px 8px 1px 1px hsl(189, 59%, 45%)'
      },
      colors: {
        'lighterBlue': 'hsl(214, 47%, 23%)',
        'darkerBlue': 'hsl(237, 49%, 15%)',
        'scoreText': 'hsl(229, 64%, 46%)',
        'darkText': 'hsl(229, 25%, 31%)',
        'headerOutline': 'hsl(217, 16%, 45%)',
        'lizard1': 'hsl(261, 73%, 60%)',
        'lizard2': 'hsl(261, 72%, 63%)',
        'paper1': 'hsl(230, 89%, 62%)',
        'paper2': 'hsl(230, 89%, 65%)',
        'rock1': 'hsl(349, 71%, 52%)',
        'rock2': 'hsl(349, 70%, 56%)',
        'scissors1': 'hsl(39, 89%, 49%)',
        'scissors2': 'hsl(40, 84%, 53%)',
        'spock1': 'hsl(189, 59%, 53%)',
        'spock2': 'hsl(189, 58%, 57%)',
      },
      fontFamily: {
        'barlow': '[Barlow Semi Condensed, sans-serif]'
      },
      height: {
        '2.5rem': '2.5rem',
        '5rem': '5rem',
        '7.5rem':'7.5rem',
        '9.5rem':'9.5rem',
        '10rem': '10rem',
        '16.5rem': '16.5rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '80%': '80%',
        'gameboard-mobile': '5rem'
      },
      screens: {
        'lg': '1366px'
      },
      spacing: {
        '0.5rem': '0.5rem',
        '1rem': '1rem',
        '8.5rem': '8.5rem',
        '9.5rem': '9.5rem',
        'screenCenter': 'calc((100% - 4.5rem) / 2 )',
        'screenCenterDesktop': 'calc((100% - 8rem) / 2 )',
        'screenCenterHeightRules': 'calc((100vh - 30rem) /2)',
        'screenCenterWidthRules': 'calc((100vw - 25rem) /2)',
        'resultPosition': '23%',
        '17rem': '17rem'
      }, 
      width: {
        '5rem': '5rem',
        '6rem': '6rem',
        '7.5rem':'7.5rem',
        '9.5rem':'9.5rem',
        '10rem': '10rem',
        '17.5rem': '17.5rem',
        '19.5rem': '19.5rem',
        '23.4rem': '23.4rem',
        '25rem': '25rem',
        '30rem':'30rem',
        '35rem': '35rem',
        '40rem':'40rem',
      }
      
    },
  },
  plugins: [],
}


