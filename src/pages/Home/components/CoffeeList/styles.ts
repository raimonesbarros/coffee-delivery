import { styled } from "styled-components";

export const CoffeeListContainer = styled.div`
  width: 100%;

  > div {
    max-width: 70rem;

    margin: auto;
    padding: 2rem 0;
  }
`;

export const CoffeeListHeader = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 2rem;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme.base800};
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    label {
      padding: 0.375rem 0.75rem;
      border: 1px solid ${(props) => props.theme.secondary};
      border-radius: 100px;
      list-style: none;

      font-weight: 700;
      font-size: 0.625rem;
      text-transform: uppercase;

      color: ${(props) => props.theme.secondary_dark};
      cursor: pointer;

      input {
        display: none;
      }
    }

    label:has(:checked) {
      background: ${(props) => props.theme.secondary_light};
    }
  }

  @media screen and (width<=768px) {
    flex-direction: column;
    padding: 0 0.5rem;
  }
`;

export const CoffeeListContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;

  margin-top: 3.375rem;
`;
