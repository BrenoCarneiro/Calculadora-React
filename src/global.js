import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
    }
    @font-face {
        font-family: 'digii';
        src: url('./../publicDS-DIGII.TTF') format('truetype');
        font-style: normal;
        font-display: fallback;
      }
`

