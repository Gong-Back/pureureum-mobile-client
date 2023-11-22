import { css } from '@emotion/react';

export const GlobalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    background-color: #f1f2f1;
  }

  body {
    min-width: 375px;
    max-width: 450px;
    margin: 0 auto;
    background-color: #fff;
    min-height: 100vh;
    position: relative;
  }

  *,
  *:before,
  *:after {
    font-family: SUIT;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    border: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #c8c8c8;
    &:hover {
      background-color: #aaaaaa;
    }
  }
`;
