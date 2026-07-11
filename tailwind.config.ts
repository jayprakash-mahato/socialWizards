import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B2C6F",
          50: "#E8EDF8",
          100: "#C5D1EE",
          200: "#8FA5DC",
          300: "#5979CB",
          400: "#2D52B8",
          500: "#0B2C6F",
          600: "#092459",
          700: "#071C44",
          800: "#05142F",
          900: "#030C1A",
        },
        secondary: {
          DEFAULT: "#FF7A00",
          50: "#FFF3E8",
          100: "#FFE0C2",
          200: "#FFC285",
          300: "#FFA347",
          400: "#FF8A1A",
          500: "#FF7A00",
          600: "#CC6200",
          700: "#994900",
          800: "#663100",
          900: "#331800",
        },
        background: "#FFFFFF",
        foreground: "#1E293B",
        "light-gray": "#F8FAFC",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0B2C6F 0%, #1a4a9e 50%, #0B2C6F 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(11,44,111,0.05) 0%, rgba(255,122,0,0.05) 100%)",
      },
      boxShadow: {
        "card-hover": "0 20px 60px rgba(11, 44, 111, 0.15)",
        "card-default": "0 4px 24px rgba(11, 44, 111, 0.08)",
        glass: "0 8px 32px rgba(11, 44, 111, 0.12)",
        "orange-glow": "0 0 30px rgba(255, 122, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
