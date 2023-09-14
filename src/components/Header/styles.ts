import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 10000;

  svg {
      display: none;

      @media(max-width: 640px) {
        display: block;
        cursor: pointer;
      }
  }

  img {
    height: 4.5rem;
  }

  nav {
    display: flex;
    gap: 1rem;

    ul {
      display: flex;
      gap: 1rem;
      list-style: none;

      li {
        a {
          display: flex;        
          gap: 0.2rem;
          text-decoration: none;
          color: ${(props) => props.theme["gray-900"]};
          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;

          svg {
            display: block;
          }

          &:hover {
            border-bottom: 3px solid ${(props) => props.theme["green-500"]};
          }

          &.active {
            color: ${(props) => props.theme["green-500"]};
          }
        }
      }

      @media(max-width: 640px) {
        display: ${(props) => props.color};
        background-color: rgba(255,255,255,0.9);
        position: absolute;
        left: 0;
        top: 6.5rem;
        width: 100%;
        padding: 1rem 1.5rem;
        border-top: 1px solid #005e68;
        border-bottom: 2px solid #005e68;
        box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);

        li {
          margin: 0.5rem 0;
        }
      }
    }
  }
`;
