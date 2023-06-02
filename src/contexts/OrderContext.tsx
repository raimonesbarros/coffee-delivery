import { ReactNode, createContext, useState } from "react";
import { CoffeeCardType } from "../pages/Home/components/CoffeeCard";
import { coffeeList } from "../data";
import { produce } from "immer";

interface OrderContextType {
  cart: CoffeeCardType[];
  addToCart: (name: string, qtty: number) => void;
  setCart: React.Dispatch<React.SetStateAction<CoffeeCardType[]>>;
}

export interface CartType {
  img: string | undefined;
  name: string | undefined;
  price: number | undefined;
  qtty: number | undefined;
}

interface OrderContextProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProps) {
  const [cart, setCart] = useState<CoffeeCardType[]>([]);

  function addToCart(name: string, qtty: number) {
    const index = coffeeList.findIndex((coffee) => {
      return coffee.name == name;
    });

    const newOrder = {
      img: coffeeList[index].img,
      name: coffeeList[index].name,
      price: coffeeList[index].price,
      qtty: qtty,
    };

    const orderExist = cart.find((item) => item.name == name);
    if (!orderExist) {
      setCart(
        produce((draft) => {
          draft.push(newOrder);
        })
      );
    }
  }

  return (
    <OrderContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
