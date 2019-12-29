import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f5f5f5;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    &::-webkit-scrollbar-thumb {
      background: #999;
      outline: 1px solid slategrey;
    }
  }

  body, html, #root {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-family: 'Roboto', Arial, sans-serif;
  }

  a {
    text-decoration: none
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`
