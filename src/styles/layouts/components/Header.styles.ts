import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.base100};

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  nav {
    width: 100%;
    max-width: 70rem;

    padding: 0 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 2.5rem;
    }
  }
`;

export const HeaderActions = styled.div`
  width: 12.0625rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    position: relative;
    width: 2.375rem;
    height: 2.375rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme.secondary_light};
    color: ${(props) => props.theme.secondary_dark};
    cursor: pointer;

    span {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(30%, -30%);

      width: 1.25rem;
      height: 1.25rem;
      flex: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;

      font-weight: 700;
      font-size: 0.75rem;

      background: ${(props) => props.theme.secondary_dark};
      color: ${(props) => props.theme.white};
    }
  }
`;

export const Location = styled.span`
  width: 8.9375rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;

  background: ${(props) => props.theme.primary_light};
  color: ${(props) => props.theme.primary_dark};

  font-size: 0.875rem;
`;
