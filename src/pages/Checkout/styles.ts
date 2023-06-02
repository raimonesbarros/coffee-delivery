import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0 0.5rem;


  > div {
    width: 100%;
    max-width: 70rem;

    margin: auto;

    display: flex;
    justify-content: space-between;
    gap: 2rem;

    h2 {
      font-family: "Baloo 2", cursive;
      font-weight: 700;
      font-size: 1.125rem;

      display: flex;
      align-items: center;

      color: ${(props) => props.theme.base800};
      margin-bottom: 0.25rem;
    }
  }

  @media screen and (width<=1080px) {
    > div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const CheckoutDelivery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 57.14%;
  max-width: 40rem;

  @media screen and (width<=1080px) {
    width: 100%;
  }
`;

export const CheckoutOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 40%;
  max-width: 28rem;

  @media screen and (width<=1080px) {
    width: 100%;
    max-width: 40rem;
  }
`;
