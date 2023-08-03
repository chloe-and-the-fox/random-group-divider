import { createGlobalStyle } from "styled-components";

import { resetStyle } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  /* Font: Pretendard */
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css");
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
