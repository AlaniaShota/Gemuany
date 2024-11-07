import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontSize: {
    //   // textxs:'9px'
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redGemuany: "#F83E55",
        redHoverGemuany: "#F63E55",
        whiteSecond: "#FAF3E0",
        item: "#22222A",
        priceUnic: "#2E2E2E",
        offerBorder: "#A6A6A6",
        darkBlue: "#22222A",
      },
      backgroundColor: {
        redGemuany: "#F83E55",
        buttonActive: "#07A548",
        item: "#22222A",
        priceUnic: "#2E2E2E",
        offerBorder: "#A6A6A6",
      },
      boxShadow: {
        redHoverGemuany:
          "0px 33px 9px 0px rgba(248, 62, 85, 0.00), 0px 21px 9px 0px rgba(248, 62, 85, 0.01), 0px 12px 7px 0px rgba(248, 62, 85, 0.05), 0px 5px 5px 0px rgba(248, 62, 85, 0.09), 0px 1px 3px 0px rgba(248, 62, 85, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
