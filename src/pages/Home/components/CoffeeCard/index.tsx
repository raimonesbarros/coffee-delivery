import { useState, useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import {
  CoffeeCardContainer,
  CoffeeCardTags,
  CoffeeCardBuy,
  CoffeeCardActions,
} from "./styles";

export interface CoffeeCardType {
  img?: string;
  tags?: string[];
  name: string;
  description?: string;
  price: number;
  qtty?: number | undefined;
  onAddToCart?: (name: string) => void;
}

export function CoffeeCard({
  img,
  tags,
  name,
  description,
  price,
}: CoffeeCardType) {
  const { addToCart } = useContext(OrderContext);
  const [qtty, setQtty] = useState(1);

  function handleChangeQtty(action: string) {
    if (qtty > 1 && action == "minus") {
      setQtty((state) => state - 1);
    }
    if (action == "plus") {
      setQtty((state) => state + 1);
    }
  }

  function handleAddToCart(name: string, qtty: number) {
    addToCart(name, qtty);
  }

  return (
    <CoffeeCardContainer>
      <img src={img} />
      <CoffeeCardTags>
        {tags?.map((tag) => {
          const id = uuidv4();
          return <span key={id}>{tag}</span>;
        })}
      </CoffeeCardTags>
      <h2>{name}</h2>
      <p>{description}</p>
      <CoffeeCardBuy>
        <p>
          <span>R$</span>
          <strong>
            {price.toLocaleString("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
            })}
          </strong>
        </p>
        <CoffeeCardActions>
          <div>
            <Minus
              onClick={() => handleChangeQtty("minus")}
              size={14}
              weight="bold"
            />
            <p>{qtty}</p>
            <Plus
              onClick={() => handleChangeQtty("plus")}
              size={14}
              weight="bold"
            />
          </div>
          <ShoppingCart
            onClick={() => handleAddToCart(name, qtty)}
            size={38}
            weight="fill"
          />
        </CoffeeCardActions>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  );
}
