import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin-top: 0;
  }

  body {
    margin: 0;
    background: #f3f4f5;
    font-family: sans-serif;
    color: #222222;
  }

  .playground {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
  }

  .playground__editor {
    flex: 1 1 70%;
    overflow: hidden;
    padding: 15em 2rem 0 2rem;
    text-align: center;
  }

  .playground__showcases {
    flex: 1 1 30%;
    overflow: hidden;
    padding: 2em;
    background: #fff;
    max-height: 100%;
    overflow-y: scroll;
  }
`

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)
