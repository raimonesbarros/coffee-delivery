import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./Default.style";
import { Header } from "./components/Header";

export function DefautLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
}
