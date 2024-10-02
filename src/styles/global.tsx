import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  button,textarea,input{
    font-family: "Inter", sans-serif;
  }

  body{
    background-color:#15202b;
    font-family: "Inter", sans-serif;
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  main{
    margin: 0 auto;
    max-width: 1000px;
    min-height: 100vh;
    padding: 1.5rem 1.25rem;
    display:grid;
    grid-template-columns: 300px 1fr;
  }

  .content{
    border-left:1px solid #1F2937;
    border-right: 1px solid #1F2937;
  }
`;

