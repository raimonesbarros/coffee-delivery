import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import dummy from "../../../../assets/Imagem.svg";
import {
  ShowcaseBenefit,
  ShowcaseBenefits,
  ShowcaseContainer,
  ShowcaseDescription,
} from "./styles";

export function Showcase() {
  return (
    <ShowcaseContainer>
      <div>
        <ShowcaseDescription>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ShowcaseBenefits>
            <ShowcaseBenefit>
              <span className="cart">
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </ShowcaseBenefit>
            <ShowcaseBenefit>
              <span className="package">
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </ShowcaseBenefit>
            <ShowcaseBenefit>
              <span className="timer">
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </ShowcaseBenefit>
            <ShowcaseBenefit>
              <span className="coffee">
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </ShowcaseBenefit>
          </ShowcaseBenefits>
        </ShowcaseDescription>
        <img src={dummy} />
      </div>
    </ShowcaseContainer>
  );
}
