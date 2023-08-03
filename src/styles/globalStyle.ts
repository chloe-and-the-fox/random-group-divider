import { createGlobalStyle } from "styled-components";

import { resetStyle } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  /* Font: Pretendard */
  * {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  /* Background*/
  body {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.Gray050};
  }
`;
