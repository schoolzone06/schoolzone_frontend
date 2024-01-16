import { css } from "@emotion/react";

const globalCss = css`
  @import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  * {
    padding: 0;
    margin: 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .css-1uxt8wb-MuiTypography-root {
    font-family: "Pretendard", "Helvetica Neue", sens-serif;
  }
`;

export default globalCss;
