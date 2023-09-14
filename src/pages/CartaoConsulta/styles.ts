import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const TudoFidelidadeContainer = styled.div`
  h1 {
    text-align: center;
    color: #005e68;
    font-size: 3rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  h2 {
    text-align: center;
    color: #005e68;
    font-size: 1rem;
    font-weight: normal;
  }

  img {
    margin: auto;
    width: 100%;
    margin: 2rem 0;
  }

  button.chakra-tabs__tab {
    color: #005e68;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  div {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);

    aside {
      padding: 1rem;

      h2 {
        text-align: left;
        font-size: 2rem;
      }

      ul {
        margin: 1rem 2rem;

        li {
          font-size: 1.4rem;
        }
      }
    }

    img {
      width: 100%;
    }

    @media(max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  @media(max-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    padding: 1rem;

    div.chakra-tabs__tablist {
      display: block;
    }
  }
`;

export const TudoFidelidadeCadastro = styled.div`
  @media(max-width: 640px) {
    padding: 1rem;
  }

  h2 {
    background-image: linear-gradient(180deg, #005e68, #0b7283, #005e68);
    margin: auto;
    text-align: center;
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    margin: 2rem 0;
  }

    aside {
      margin: auto;
      text-align: center;


      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        span {
          gap: 1rem;

          div {
            display: flex;
            flex-direction: column;
        }
      }
    }

    @media(max-width: 640px) {
      flex-direction: column;
    }
  }
`;
