import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: #F0F0F7;
    --color-primary: #FFA502;
    --color-secondary: #04D361;
    --color-text-base: #FFF;
    --color-text-primary: #9C98A6;
    --color-text-secondary: #B2BEC3;
    --color-input-border: #E6E6F0;
    --color-input-text: #6A6180;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  body, button, h2 {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
    --webkit-font-smoothing: antialiased;
  }

  input, textarea {
    color: var(--color-input-text);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
