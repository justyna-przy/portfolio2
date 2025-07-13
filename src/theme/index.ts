import { createTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

export const theme = createTheme({
  cssVariables: {
    cssVarPrefix: "brand",
    colorSchemeSelector: "class", // .light / .dark classes
  },

  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        background: { default: "#f0f0f0", paper: "#fff" },
        text: { primary: "#050c10", secondary: "#3c3d45" },
        primary: { main: "#8991ff" },
        secondary: { main: "#ffafde" },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        background: { default: "#1a1d1e", paper: "#081218" },
        text: { primary: "#ffffff", secondary: "#c3cde1" },
        primary: { main: "#8991ff" },
        secondary: { main: "#ffafde" },
      },
    },
  },

  typography: {
    fontFamily: "var(--font-outfit), sans-serif",
    h1: {
      fontWeight: 500,
      fontSize: "clamp(2.5rem,6vw,5rem)",
      letterSpacing: ".05em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "1.7rem",
      fontFamily: "var(--font-outfit)",
    },
    h4: {
      fontWeight: 400,
      fontSize: "1.7rem",
      fontFamily: "var(--font-recursive)",
    },
    h5: {
      fontWeight: 300,
      fontSize: "1.4rem",
      fontStyle: "italic",
      fontFamily: "var(--font-outfit)",
    },
    h6: {
      fontWeight: 200,
      fontSize: "1rem",
      fontStyle: "italic",
      fontFamily: "var(--font-outfit)",
    },
    body1: {
      fontWeight: 300,
      fontSize: "1.2rem",
      fontFamily: "var(--font-outfit)",
    },
    body2: {
      fontWeight: 300,
      fontSize: ".8rem",
      fontFamily: "var(--font-recursive)",
    },
  },

  shape: { borderRadius: 8 },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 16 },
        containedPrimary: {
          backgroundColor: "var(--brand-palette-primary-main)",
          "&:hover": { backgroundColor: "var(--brand-palette-primary-dark)" },
        },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none", boxShadow: "none" } },
    },
  },
});
