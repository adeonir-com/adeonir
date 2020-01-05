import { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlogalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  body.dark {
    --background: ${colors.darker};
    --post: ${colors.dark};
    --title: ${colors.white};
    --text: ${colors.lighter};
    --accent: ${colors.accent};
    --sidebar: ${colors.black};
    --button: ${colors.gray};
    --disabled: ${colors.dark};
    --neutral: ${colors.gray};
  }

  body.light {
    --background: ${colors.light};
    --post: ${colors.lighter};
    --title: ${colors.darker};
    --text: ${colors.dark};
    --accent: ${colors.accent};
    --sidebar: ${colors.dark};
    --button: ${colors.dark};
    --disabled: ${colors.gray};
    --neutral: ${colors.gray};
  }

`

export default GlogalStyle
