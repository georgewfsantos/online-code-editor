import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height:100vh;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 14px ;
  }
  a {
    text-decoration:none;
  }
  ul {
    list-style:none;
  }
  button {
    cursor: pointer;
  }

  div.Toastify__toast.Toastify__toast--success{
    background : #d77dba;
    font-weight: 500;
    margin-top: 50px;
  }
`;
