import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.base200};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem !important;
  }

  > h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.25rem;

    color: ${(props) => props.theme.base800};
  }

  > p {
    font-size: 14px;
    text-align: center;

    color: ${(props) => props.theme.base600};
  }

`;

export const CoffeeCardTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  span {
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme.secondary_light};
    border-radius: 100px;

    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    color: ${(props) => props.theme.secondary_dark};
  }
`;

export const CoffeeCardBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.8125rem;

  margin: 0 0.25rem;

  > p {
    color: ${(props) => props.theme.base700};

    span {
      font-size: 0.875rem;
      padding-right: 0.25rem;
    }

    strong {
      font-family: "Baloo 2", cursive;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`;

export const CoffeeCardActions = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.4rem;

    background: ${(props) => props.theme.base400};
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme.primary};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.primary_dark};
      }
    }

    p {
      color: ${(props) => props.theme.base900};
    }
  }

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    background: ${(props) => props.theme.primary_dark};
    color: ${(props) => props.theme.base200};
    border-radius: 6px;
    cursor: pointer;
  }
`;
