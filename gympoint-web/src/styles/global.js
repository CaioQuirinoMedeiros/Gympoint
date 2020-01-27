import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-datepicker/dist/react-datepicker.min.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

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

    &.no-scroll {
      overflow-y: hidden;
      padding-right: 16px;
    }
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

  input,
  textarea {
    border-style: solid;
    outline: none;
    font-family: inherit;
    color: inherit;

    border-width: 1px;
    border-color: ${({ theme }) => theme.dim};
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.4rem;
    border-radius: 5px;
    resize: vertical;
    transition: border 0.2s;

    &::placeholder {
      color: ${({ theme }) => theme.inkLight};
    }

    &:hover {
      border-color: ${({ theme }) => theme.dimDark};
    }

    &:focus {
      border-color: ${({ theme }) => theme.ink};
    }

    &[disabled] {
      cursor: not-allowed;

      &:hover {
        border-color: ${({ theme }) => theme.dim};
      }
    }
  }

  ul {
    list-style: none;
  }

/* ----------------------------------------------
 * Generated by Animista on 2020-1-6 3:29:55
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

`
