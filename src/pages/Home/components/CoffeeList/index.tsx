import { useEffect, useState } from "react";
import { coffeeList } from "../../../../data";
import { CoffeeCard, CoffeeCardType } from "../CoffeeCard";
import { v4 as uuidv4 } from "uuid";
import {
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListContent,
} from "./styles";
import { produce } from "immer";

const coffeeTypes = [
  {
    name: "Tradicional",
    isChecked: false,
  },
  {
    name: "Especial",
    isChecked: false,
  },
  {
    name: "Com Leite",
    isChecked: false,
  },
  {
    name: "Alcoólico",
    isChecked: false,
  },
  {
    name: "Gelado",
    isChecked: false,
  },
];

export function CoffeeList() {
  const [types, setTypes] = useState(coffeeTypes);
  const [showCoffee, setshowCoffee] = useState<CoffeeCardType[]>([]);

  function handleTypeSelect(event: React.FormEvent<EventTarget>) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const isChecked = target.checked;
    const index = types.findIndex((type) => type.name == value);

    setTypes(
      produce((draft) => {
        draft[index].isChecked = isChecked;
      })
    );
  }

  useEffect(() => {
    const selectedCoffees: CoffeeCardType[] = [];
    types.map((type) => {
      if (type.isChecked) {
        coffeeList.map((coffee) => {
          coffee.tags.includes(type.name) &&
            !selectedCoffees.includes(coffee) &&
            selectedCoffees.push(coffee);
        });
      }
    });
    setshowCoffee(selectedCoffees);
    !selectedCoffees.length && setshowCoffee(coffeeList);
  }, [types]);

  return (
    <CoffeeListContainer>
      <div>
        <CoffeeListHeader>
          <h2>Nossos cafés</h2>
          <nav>
            <label onChange={handleTypeSelect}>
              TRADICIONAL
              <input type="checkbox" value="Tradicional" />
            </label>
            <label onChange={handleTypeSelect}>
              ESPECIAL
              <input type="checkbox" value="Especial" />
            </label>
            <label onChange={handleTypeSelect}>
              COM LEITE
              <input type="checkbox" value="Com Leite" />
            </label>
            <label onChange={handleTypeSelect}>
              ALCOÓLICO
              <input type="checkbox" value="Alcoólico" />
            </label>
            <label onChange={handleTypeSelect}>
              GELADO
              <input type="checkbox" value="Gelado" />
            </label>
          </nav>
        </CoffeeListHeader>
        <CoffeeListContent>
          {showCoffee.map((coffee) => {
            const id = uuidv4();
            return (
              <CoffeeCard
                key={id}
                img={coffee.img}
                tags={coffee.tags}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
              />
            );
          })}
        </CoffeeListContent>
      </div>
    </CoffeeListContainer>
  );
}
