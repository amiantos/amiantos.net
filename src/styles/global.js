import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color:#202040;
  }
  a {
    color: #b030b0;
    font-weight:bold;
  }
  p {
    margin-top:0;
    margin-bottom:1.3em;
  }
  hr {
    border:0;
    border-top:1px solid #602080;
    margin:30px;
  }
  h1, h2, h3, h4 {
    margin-top:0;
  }
  blockquote {
    border-left:2px solid #602080;
    padding-left:10px;
    font-style:italic;
    margin-left:10px;
  }
  ul, ol {
    padding-left:20px;
  }
`;

export default GlobalStyle;
