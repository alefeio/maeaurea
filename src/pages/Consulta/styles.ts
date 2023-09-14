import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;

  h1 {
    text-align: center;
    color: #005e68;
    font-size: 3rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  @media(max-width: 640px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const TudoFidelidadeCadastro = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width: 640px) {
      grid-template-columns: 1fr;
      padding: 1rem;
    }

    img {
      height: 10rem;
      margin: auto;
    }

    form {
      width: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      span {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: top;
        gap: 1rem;

        div {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

export const Title = styled.div`
  border-top: 1px solid #005e68;
  padding: 0.5rem;
`;
