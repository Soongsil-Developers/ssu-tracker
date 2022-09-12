import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      gray: string;
      black: string;
      white: string;
    };
    fontSize: {
      m1: string;
      b1: string;
      b2: string;
      // * Extra Bold
      eb1: string;
      eb2: string;
      eb3: string;
    };
    fontWeight: {
      extraBold: number;
      bold: number;
      semiBold: number;
      medium: number;
      regular: number;
    };
  }
}
