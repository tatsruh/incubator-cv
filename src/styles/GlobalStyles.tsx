import { createGlobalStyle } from "styled-components";
import { CvTheme } from "./Theme";

export const GlobalStyles = createGlobalStyle `
    html {
        scroll-behavior: smooth;
        
    }
    html, body {
        max-width: 100%;
        overflow-x: hidden;
    }

    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-weight: 500;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
        scroll-behavior: smooth;
    }
    
    ul {
        list-style: none;
        
    }
    section {
        padding-top: 100px;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    section {
        background-color: ${CvTheme.colors.background};
    }



`