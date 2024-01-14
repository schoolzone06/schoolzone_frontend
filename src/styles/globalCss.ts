import { css } from "@emotion/react";

const globalCss = css`
  @import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  * {
    font-family: "'Pretendard', 'Helvetica Neue', sens-serif";
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default globalCss;
