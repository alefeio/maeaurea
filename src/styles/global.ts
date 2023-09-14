import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;      
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]}
    }

    body {
        color: ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;

export const Title = styled.div`
  background: #005e68;
  padding: 0.5rem;
  color: #fff;
`;
