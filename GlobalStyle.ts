import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-background-primary: #463F32;
    --theme-background-secondary: #BF6130;
    --theme-background-muted: #463F32BC;
    --theme-primary: #FFFFFFF7;
    --theme-secondary: #00173C;
    --theme-alt: #0BBF53;
    --theme-link-primary: #DF9629;

    --theme-white: #FFFFFB;
    --theme-dark: #1C160D;
    --theme-muted: #FFFFFF99;

    // Default
    --font-size-hero: 3rem;
    --font-size-title: 2.2rem;
    --font-size-medium: 1.1875rem;
    --font-size-small : 0.8rem;

    --font-weight-title: 400;
    --font-weight-thin: 200;
    --font-weight-normal: normal;
    --font-weight-heavy: bold;

    --theme-border-radius: 5px;
  }

  html {
    background: var(--theme-white);

    &::-webkit-scrollbar {
        width: 16px;
    }
    
    &::-webkit-scrollbar-track {
        background-color: var(--theme-background-secondary);
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--theme-background-primary);
    }
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
`

export default GlobalStyle
