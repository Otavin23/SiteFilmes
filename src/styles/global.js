import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle` 
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;800&display=swap');
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            text-decoration: none;
            h3{
                font-size: 16px;
                max-width: 400px;
                color: #e7e7e7;

                font-family: Arial, Helvetica, sans-serif;
                margin-bottom: 0.5rem;
            }
            p{
                color: #cacaca;
            }
        }     
        body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        background-color: black;
        }

        code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
`
