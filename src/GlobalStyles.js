import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{ 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    body{
  
            background-color: #f5f1f1ff;
        }
`;
