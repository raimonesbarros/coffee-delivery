import { styled } from "styled-components";

export const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  background: ${(props) => props.theme.base200};
  border-radius: 0.375rem 2.75rem;

  a {
    width: 100%;
    text-decoration: none;
  }

  button[type="submit"] {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem 0.5rem;
    border: none;
    border-radius: 6px;

    font-weight: 700;
    font-size: 0.875rem;
    font-stretch: 100;

    line-height: 1.6;
    text-transform: uppercase;

    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};

    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const OrderCardTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.75rem;

  p {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.875rem;
    color: ${(props) => props.theme.base700};
  }

  span {
    font-size: 1rem;
  }

  strong {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.base800};
  }
`;
