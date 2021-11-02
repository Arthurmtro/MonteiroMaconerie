import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-background-primary: #463F32;
    --theme-background-secondary: #BF6130;
    --theme-primary: #fffffff7;
    --theme-secondary: #00173C;
    --theme-alt: #0BBF53;
    --theme-link-primary: #DF9629;

    // Default
    --font-size-title: calc(2.5rem);
    --font-size-medium: calc(1.1875rem);
    --font-size-small : calc(0.8rem);
  }

  html {
    background: #fffffB;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 1.6;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Wotfard, Futura, -apple-system, sans-serif;
    color: var(--theme-primary);
  }
`;

export default GlobalStyle;
