import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: auto;

  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
`;
