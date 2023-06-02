import { styled } from "styled-components";

export const SuccessContainer = styled.div`
  padding-top: 5rem;

  > div {
    width: 100%;
    max-width: 70rem;

    margin: auto;
    padding: 0 0.5rem;

    h2 {
      font-family: "Baloo 2", cursive;
      font-weight: 800;
      font-size: 2rem;

      color: ${(props) => props.theme.secondary_dark};
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme.base800};
    }
  }
`;

export const ViewerDeliveryInfo = styled.div`
  width: 100%;
  margin: 1.75rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  img {
    width: 100%;
  }

  @media screen and (width<=1080px) {
    max-width: 30rem;
    flex-direction: column-reverse;
  }
`;

export const BorderGradient = styled.div`
  width: 100%;

  background: linear-gradient(
    102.89deg,
    ${(props) => props.theme.secondary} 2.61%,
    ${(props) => props.theme.primary} 98.76%
  );

  border-radius: 6px 36px;
  margin: 1rem 2.875rem;
`;

export const InfoCardDelivery = styled.div`
  margin: 2px 2px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme.base100};

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.75rem;

    > span {
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      color: ${(props) => props.theme.base100};
    }

    p {
      color: ${(props) => props.theme.base700};
      > span {
        display: block;
      }
      strong {
        font-weight: 700;
      }
    }
  }

  .addressInfo > span {
    background: ${(props) => props.theme.primary};
  }
  .timerInfo > span {
    background: ${(props) => props.theme.secondary};
  }
  .paymentInfo > span {
    background: ${(props) => props.theme.secondary_dark};
  }
`;
