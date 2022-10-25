import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Lato, Arial, sans-serif;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body, html {
    background-color: ${({ theme }) => 
      theme.palette.background.default};
  }

  body {
    padding: ${({ theme }) => theme.gutter}px;
  }
`;

export default GlobalStyle;
