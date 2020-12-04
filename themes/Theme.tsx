import { createText, createTheme } from "@shopify/restyle";

const palette = {
  white: "#ffffff",
  black: "#111111",
};

export const theme = createTheme({
  colors: {
    textPrimary: palette.black,
  },
  textVariants: {
    heading1: {
      fontSize: 32,
      fontWeight: "800",
      color: "textPrimary",
    },
    heading2: {
      fontSize: 24,
      fontWeight: "700",
      color: "textPrimary",
    },
    description: {
      fontSize: 14,
      fontWeight: "300",
      color: "textPrimary",
    },
  },
  spacing: {
    2: 8,
    4: 16,
    6: 24,
    8: 32,
    10: 40,
  },
  breakpoints: {},
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    textPrimary: palette.white,
  },
};

type Theme = typeof theme;

// Components
export const Text = createText<Theme>();
