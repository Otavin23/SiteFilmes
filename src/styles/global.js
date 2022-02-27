import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle` 
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;800&display=swap');
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            text-decoration: none;  
        }     
        body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        }

        code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
`
