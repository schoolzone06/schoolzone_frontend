import { css } from "@emotion/react";

const globalCss = css`
  @import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  * {
    font-family: "'Pretendard', 'Helvetica Neue', sens-serif";
    border: 0;
    margin: 0;
  }

  ul,
  li {
    list-style: none;
  }

  p {
    display: inline-block;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  label {
    cursor: pointer;
  }

  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    border: none;
    outline: none;
    resize: none;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default globalCss;
