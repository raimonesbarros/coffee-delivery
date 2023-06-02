import {
  SuccessContainer,
  ViewerDeliveryInfo,
  BorderGradient,
  InfoCardDelivery,
} from "./styles";
import illustration from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function Success() {
  const dataStorage = localStorage.getItem("@coffeeDelivery1.0.0");
  const dataLiteral = dataStorage ? JSON.parse(dataStorage) : {};
  return (
    <SuccessContainer>
      <div>
        <div className="message">
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <ViewerDeliveryInfo>
          <BorderGradient>
            <InfoCardDelivery>
              <div className="addressInfo">
                <span>
                  <MapPin size={16} weight="fill" />
                </span>
                <p>
                  Entrega em{" "}
                  <strong>
                    {dataLiteral && dataLiteral.street},{" "}
                    {dataLiteral && dataLiteral.number}
                  </strong>
                  <span>
                    {dataLiteral && dataLiteral.district} -{" "}
                    {dataLiteral && dataLiteral.city},{" "}
                    {dataLiteral && dataLiteral.uf}
                  </span>
                </p>
              </div>
              <div className="timerInfo">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>
                  Previsão de entrega
                  <span>
                    <strong>20 min - 30 min</strong>
                  </span>
                </p>
              </div>
              <div className="paymentInfo">
                <span>
                  <CurrencyDollar size={16} />
                </span>
                <p>
                  Pagamento na entrega
                  <span>
                    <strong>{dataLiteral && dataLiteral.payment}</strong>
                  </span>
                </p>
              </div>
            </InfoCardDelivery>
          </BorderGradient>
          <img src={illustration} />
        </ViewerDeliveryInfo>
      </div>
    </SuccessContainer>
  );
}
