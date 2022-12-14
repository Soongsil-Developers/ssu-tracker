import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.otf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.otf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.otf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.otf');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-ExtraBold.otf');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  html, body {
    font-family: 'Pretendard';
  }

  * {
    outline: none;
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
