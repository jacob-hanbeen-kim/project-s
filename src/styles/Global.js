import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'); */

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.fontDefault};
        font-family: sans-serif;
        font-size: 1.15em;
        /* font-size: 67.5%; */
        margin: 0;
        padding: 0;
    }

    p {
        color: ${({ theme }) => theme.colors.fontMuted};
        opacity: 0.75;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyles