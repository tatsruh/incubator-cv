import { createGlobalStyle } from "styled-components";
import { CvTheme } from "./Theme";

export const GlobalStyles = createGlobalStyle `
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-weight: 500;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
    }
    
    ul {
        list-style: none;
        
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    section {
        background-color: ${CvTheme.colors.background};
    }



`