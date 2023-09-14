import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const AClinicaContainer = styled.div`
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
    margin: 0 0 5rem;
    padding: 0;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    img {
      width: 100%;
    }

    aside {
      gap: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        margin: 0.3rem 0;
        font-size: 1.1rem;
      }
    }
  }

  @media(max-width: 640px) {
    h1 {
      font-size: 2rem;
    }
    
    div {
      grid-template-columns: 1fr;
      padding: 1rem;
    }
  }
`;

export const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  h2 {
    color: #005e68;
    font-size: 2rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  ul {
    margin: 1rem 2rem;
    li {
      font-size: 1.5rem;
    }
  }

  div {
    aside {
      margin: 1rem 0 0;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;

      img {
        cursor: pointer;
      }
    }
  }
`;
