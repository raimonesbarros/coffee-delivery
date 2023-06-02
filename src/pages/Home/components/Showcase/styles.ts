import { styled } from "styled-components";

export const ShowcaseContainer = styled.div`
  width: 100%;
  background-image: url(./src/assets/Background.svg);

  > div {
    max-width: 70rem;

    margin: auto;
    padding: 5.75rem 0.5rem;
    gap: 3.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 100%;
      max-width: 30rem;
    }
  }

  @media screen and (width<=768px) {
    > div {
      flex-direction: column-reverse;
    }
  }
`;

export const ShowcaseDescription = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme.base900};
    align-self: stretch;
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base800};
    font-stretch: 100;
    align-self: stretch;
  }

  @media screen and (width<=768px) {
    h1,
    > p {
      text-align: center;
    }
  }
  @media screen and (width<=375px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const ShowcaseBenefits = styled.div`
  width: 100%;
  margin: 4.125rem auto 0;

  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  @media screen and (width<=768px) {
    max-width: 33rem;
  }
  @media screen and (width<=500px) {
    grid-template-columns: auto;
    max-width: 17rem;
  }
`;

export const ShowcaseBenefit = styled.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    color: ${(props) => props.theme.base100};
  }

  .cart {
    background: ${(props) => props.theme.secondary_dark};
  }
  .package {
    background: ${(props) => props.theme.base700};
  }
  .timer {
    background: ${(props) => props.theme.secondary};
  }
  .coffee {
    background: ${(props) => props.theme.primary};
  }

  @media screen and (width<=768px) {
  }
`;
