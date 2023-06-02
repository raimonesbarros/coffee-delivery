import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import { HeaderActions, HeaderContainer, Location } from "./Header.styles";
import { useContext } from "react";
import { OrderContext } from "../../../contexts/OrderContext";

export function Header() {
  const { cart } = useContext(OrderContext);

  function showOrderQtty() {
    if (cart.length) {
      return <span>{cart.length}</span>;
    }
  }

  return (
    <HeaderContainer>
      <nav>
        <NavLink to={"/"}>
          <img src={logo} />
        </NavLink>
        <HeaderActions>
          <Location>
            <MapPin size={22} weight="fill" className="mapPin" /> Araguaína, TO
          </Location>
          <NavLink to={"/checkout"} title="Meu carrinho">
            {showOrderQtty()}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </HeaderActions>
      </nav>
    </HeaderContainer>
  );
}
