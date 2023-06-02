import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartType, OrderContext } from "../../../../contexts/OrderContext";
import {
  OrderContainer,
  OrderActions,
  OrderRemoveButton,
} from "./Order.styles";
import { useContext } from "react";
import { produce } from "immer";

interface OrderType extends CartType {
  onRemoveOrder: (name: string | undefined) => void;
}

export function Order({
  img,
  name,
  price = 9.9,
  qtty = 1,
  onRemoveOrder,
}: OrderType) {
  const { cart, setCart } = useContext(OrderContext);

  function handleChangeQtty(action: string, name: string | undefined) {
    const index = cart.findIndex((item) => item.name == name);
    setCart(
      produce((draft) => {
        if (action == "plus") {
          draft[index].qtty = qtty + 1;
        }
        if (action == "minus" && Number(draft[index].qtty) > 1) {
          draft[index].qtty = qtty - 1;
        }
      })
    );
  }

  function handleRemoveOrder(name: string | undefined) {
    onRemoveOrder(name);
  }

  return (
    <OrderContainer>
      <div>
        <img src={img} />
        <div>
          <p>{name}</p>
          <OrderActions>
            <div>
              <Minus
                size={14}
                weight="bold"
                onClick={() => handleChangeQtty("minus", name)}
              />
              <p> {qtty} </p>
              <Plus
                size={14}
                weight="bold"
                onClick={() => handleChangeQtty("plus", name)}
              />
            </div>
            <OrderRemoveButton onClick={() => handleRemoveOrder(name)}>
              <Trash size={16} /> Remover
            </OrderRemoveButton>
          </OrderActions>
        </div>
      </div>
      <p>
        R${" "}
        {(price * qtty).toLocaleString("pt-BR", {
          style: "decimal",
          minimumFractionDigits: 2,
        })}
      </p>
    </OrderContainer>
  );
}
