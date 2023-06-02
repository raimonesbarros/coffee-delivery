import { FormToDelivery } from "./components/DeliveryForm";
import { OrderCard } from "./components/OrderCard";
import {
  CheckoutContainer,
  CheckoutDelivery,
  CheckoutOrderCard,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <CheckoutDelivery>
          <h2>Complete seu pedido</h2>
          <FormToDelivery />
        </CheckoutDelivery>
        <CheckoutOrderCard>
          <h2>Cafés selecionados</h2>
          <OrderCard />
        </CheckoutOrderCard>
      </div>
    </CheckoutContainer>
  );
}
