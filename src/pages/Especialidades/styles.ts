import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const EspecialidadesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    text-align: center;
    color: #005e68;
    font-size: 3rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  span.css-1eziwv {
    color: #005e68;
    font-size: 1.3rem;
    font-weight: normal;
    text-transform: uppercase !important;
  }

  p {
    margin: 0.5rem 0;
  }

  img {
    height: 10rem;
  }

  div.chakra-accordion__panel {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

@media(max-width: 640px) {
  h1 {
    font-size: 2rem;
  }
    
  div {
    flex-direction: column;
  }
}
`;

export const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h2 {
    color: #005e68;
    font-size: 2rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  ul {
    margin: 1rem 2rem;
    li {
      font-size: 1.3rem;
    }
  }

  div {
    aside {
      margin: 1rem 0 0;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 1rem;

      img {
        cursor: pointer;
      }
    }
  }
`;
