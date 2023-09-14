import styled from "styled-components";

export const FooterContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #016775;
  color: #fff;

  div {
    display: flex;
    align-items: top;
    justify-content: space-between;

    @media(max-width: 640px) {
      flex-direction: column;

      small {
        margin: 0.5rem 0;
      }
    }
  }

  span {
    margin: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
