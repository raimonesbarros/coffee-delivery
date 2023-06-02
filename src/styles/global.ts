import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.secondary_dark};
  }


  html {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  body {
    background: ${(props) => props.theme.base100};
    color: ${(props) => props.theme.base700};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
    border-radius: 50px;
  }

  @media screen and (width<=768px) {
    body, input, textarea, button {
      font-size: 0.875rem;
    }
  }
`;
