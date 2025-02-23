import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "hover-primary": "var(--hover-primary)",
        divider: "var(--divider)",
        "divider-300": "var(--divider300)",
        secondary: "var(--secondary)",
        'hover-secondary': "var(--hover-secondary)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'contact-hero-bg': "url('/images/contact-hero-bg.png')",
        'hero-bg': "url('/images/hero-image.png')",
        'about-us-hero': "url('/images/about-us-hero.png')",
        'company-hero': "url('/images/company-hero.png')",
        'stats-bg': "url('/images/stats-bg.png')",
        'stats-mbg': "url('/images/stats-bg-m.png')",
        
      },
      fontFamily: {
        openSans: "var(--font-openSans)",
        montserrat: "var(--font-montserrat)",
        inter: "var(-font-inter)"

      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".max-width": {
          "@apply md:max-w-[1200px] min-[2000px]:max-w-[1600px] mx-auto w-full": {},
        },
        ".main-header": {
          "@apply text-[24px] md:text-[32px] md:leading-[64px] uppercase leading-[45px] font-semibold": {},
        },
        ".main-h5": {
          "@apply text-[14px] md:text-[18px] md:leading-[32px]": {},
        },
      });
    }),
  ],
} satisfies Config;
