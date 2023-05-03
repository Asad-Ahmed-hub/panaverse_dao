/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'my-font': ['Raleway', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "banner-background-image": "url('/background-redwave.webp')",
        "pattern-bg": "url('/color-particles.svg')",
        "design-bg": "url('/background-image.jpg')",
        "team-bg": "url('/our-team-bg.png')",
        "course-bg": "url('/coursebg.jpg')",
        "about-us-bg": "url('/aboutus.jpg')",
        "about-us-mobile-bg": "url('/aboutusmobile.jpg')",
        "about-us-tablet-bg": "url('/aboutustablet.jpg')",
        

      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}