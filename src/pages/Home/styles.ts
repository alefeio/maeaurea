import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const Div2 = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  h2 {
    border-bottom: 2px solid #005e68;
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1rem;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0 0 1rem;
    padding: 0.3rem 1rem;
  }

  div {
    aside {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 1.5rem;
          text-transform: uppercase;
        }

        h3 {
          margin: 0.5rem 0 0;
        }

        img {
          width: 90%;
        }
      }

      @media(max-width: 640px) {
        grid-template-columns: 1fr;
      }

      div {
        img {
          width: 95%;
          margin: auto;
        }

        iframe {
          width: 95%;
          margin: auto;
        }
      }

      p {
        font-size: 0.97rem;
        margin: 0 0 1rem;
      }

      ul {
        margin: 1rem;
        list-style: none;

        li {
          font-size: 1rem;
        }
      }

      button {
        margin-top: auto;
        text-align: center;
        width: 100%;
      }

      span {
        img {
          margin: auto;
          margin-top: 2rem;
          width: 90%;
        }
      }
    }
  }
`;
