import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *,
  *::before {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


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

  html {
    font-size: 62.5%;

    @media only screen and (max-width: 60em) {
      font-size: 61.5%;
    }
    @media only screen and (max-width: 56em) {
      font-size: 60.5%;
    }
    @media only screen and (max-width: 50em) {
      font-size: 59%;
    }
    @media only screen and (max-width: 45em) {
      font-size: 57%;
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 55%;
    }
    @media only screen and (max-width: 25em) {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.ink};
  }
  
  #root {
    display: flex;
    min-height: 100vh;

  }

  a {
    text-decoration: none
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  input {
    border-style: solid;
    outline: none;
    font-family: inherit;
    color: inherit;
  }

  ul {
    list-style: none;
  }

`
