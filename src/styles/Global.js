import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.fontDefault};
        font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
        /* font-size: 1.15em; */
        /* font-size: 67.5%; */
        margin: 0;
        padding: 0;
    }

    p {
        /* color: ${({ theme }) => theme.colors.fontMuted}; */
        /* opacity: 0.75; */
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyles