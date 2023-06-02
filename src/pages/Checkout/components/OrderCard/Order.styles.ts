import { styled } from "styled-components";

export const OrderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  align-items: flex-start;
  padding: 0.5rem 0.25rem 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme.base400};

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  > p {
    font-weight: 700;
    color: ${(props) => props.theme.base700};
  }
`;

export const OrderActions = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  gap: 0.5rem;

  > div {
    height: 2rem;

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
      line-height: 0;
    }
  }
`;

export const OrderRemoveButton = styled.button`
  height: 2rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0 0.5rem;
  border: none;
  border-radius: 6px;

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;

  background: ${(props) => props.theme.base400};
  color: ${(props) => props.theme.base700};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.primary};
  }
`;
