import { styled } from "styled-components";

export const FormAddressContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  border-radius: 6px;

  padding: 2.5rem;
  background: ${(props) => props.theme.base200};

  > div {
    display: flex;
    align-items: flex-start;
    padding-bottom: 0.5rem;

    svg {
      color: ${(props) => props.theme.secondary_dark};
    }

    h3 {
      color: ${(props) => props.theme.base800};
    }

    p {
      color: ${(props) => props.theme.base700};
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    height: 2.625rem;

    padding: 0.75rem;

    border: 1px solid ${(props) => props.theme.base400};
    border-radius: 4px;

    background: ${(props) => props.theme.base300};
    color: ${(props) => props.theme.base700};

    font-size: 0.875rem;

    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme.base600};
    }
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  label[for="cep"],
  label[for="number"],
  label[for="district"] {
    width: 35.7%;
  }

  label[for="street"] {
    width: 100%;
  }

  label[for="complement"] {
    width: 62.9%;
  }

  label[for="city"] {
    width: 50.6%;
  }

  label[for="uf"] {
    width: 10.714%;
  }

  label span {
    font-size: 0.875rem;
    padding-left: 0.2rem;
    color: #d00;
  }

  > div {
    width: 100%;
    display: flex;
    column-gap: 0.5rem;
  }

  #order {
    display: none;
  }
`;
