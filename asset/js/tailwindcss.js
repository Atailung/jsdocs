tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
          code: {
            bg: "#1e293b",
            text: "#e2e8f0",
          },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          mono: ["Fira Code", "monospace"],
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0", transform: "translateY(10px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
          pulse: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0.7" },
          },
        },
        animation: {
          "fade-in": "fadeIn 0.5s ease-out forwards",
          float: "float 3s ease-in-out infinite",
          pulse: "pulse 2s ease-in-out infinite",
        },
      },
    },
  };