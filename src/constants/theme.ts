import type { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#F47458",
    gray: "#9E9E9E",
    black: "#1D1D1D",
    white: "#fff",
  },
  fontSize: {
    // * Medium 400
    m1: "0.875rem",
    // * Bold 600
    b1: "0.875rem",
    b2: "1rem",
    // * Extra Bold 700
    eb1: "1.375rem",
    eb2: "1.75rem",
    eb3: "1.875rem",
  },
  fontWeight: {
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  },
};

export default theme;
