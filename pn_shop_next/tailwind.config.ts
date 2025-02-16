import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8491FF',
        'secondary': '#009BF2',
        'base-color': '#000C12',
        'base-color-alt': '#0A0A0E',
        'light-grey': '#EAF5F2',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // nb- Adding custom background gradient for Neumorphism
        "neumorphic-gradient": "linear-gradient(95.49deg, #101018 0.0%, #101017 10.0%, #101018 35.03%, #101017 50.06%, #0D0D13 100.0%)",
        "base-gradient": "linear-gradient(106.95deg, #0D0D12 0.07%, #101017 44.24%, #181820 63.26%, #0E0E14 76.6%, #0E0E14 99.3%)",
      },
      // nb- Adding custom box shadows for Neumorphism
      boxShadow: {
        'neumorphic-light': '6px 6px 5px #101018, -3px -3px 5px #101017', // nb- Default shadow for Neumorphic effect
        'neumorphic-hover': '0px 4px 4px rgba(0, 0, 0, 0.20), -4px -4px 5.3px #1A1A26', // nb- Shadow for hover state
        'neumorphic-active': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset -4px -4px 5.3px #1E1E2B', // nb- Shadow for active state
      },
      borderRadius: {
        // nb- Adding custom border radius for Neumorphism
        'neumorphic': '28px',
      },
    },
  },
  plugins: [],
};

export default config;
