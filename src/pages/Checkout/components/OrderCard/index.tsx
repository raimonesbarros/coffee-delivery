import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { Order } from "./Order";
import { OrderCardContainer, OrderCardTotal } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";

export function OrderCard() {
  const { cart, setCart } = useContext(OrderContext);
  const { orderNotExist, submitting } = useContext(DeliveryContext);

  const deliveryValue = 3.5;

  function getTotalValue(itens?: string) {
    let totalItemsValue = 0;
    cart.map((item) => {
      totalItemsValue += item.price * Number(item.qtty);
    });
    if (itens) {
      return totalItemsValue.toLocaleString("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
      });
    } else {
      return (totalItemsValue + 3.5).toLocaleString("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
      });
    }
  }

  function removeOrder(name: string | undefined) {
    const cartWitOrderRemoved = cart.filter((item) => item.name != name);
    setCart(cartWitOrderRemoved);
  }

  return (
    <OrderCardContainer>
      {cart.map((order) => {
        const id = uuidv4();
        return (
          <Order
            key={id}
            img={order.img}
            name={order.name}
            price={order.price}
            qtty={order.qtty}
            onRemoveOrder={removeOrder}
          />
        );
      })}
      <OrderCardTotal>
        <p>
          Total dos itens <span>R$ {getTotalValue("itens")}</span>
        </p>
        <p>
          Entrega{" "}
          <span>
            R${" "}
            {cart.length > 0
              ? deliveryValue.toLocaleString("pt-BR", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                })
              : "0,00"}
          </span>
        </p>
        <p>
          <strong>Total</strong>
          <strong>R$ {cart.length > 0 ? getTotalValue() : "0,00"}</strong>
        </p>
      </OrderCardTotal>
      {/* <NavLink className="link" to={"/success"}></NavLink> */}
      <button
        form="formDelivery"
        disabled={submitting || orderNotExist}
        type="submit"
      >
        Confirmar pedido
      </button>
    </OrderCardContainer>
  );
}
