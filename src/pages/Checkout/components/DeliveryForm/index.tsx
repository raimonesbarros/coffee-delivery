import { useContext } from "react";
import { FormAddress } from "./Address";
import { PaymentForm } from "./Payment";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";

export function FormToDelivery() {
  const { handleSubmit, handleConfirmOrder } = useContext(DeliveryContext);

  return (
    <form
      onSubmit={handleSubmit(handleConfirmOrder)}
      id="formDelivery"
      action=""
    >
      <FormAddress />

      <PaymentForm />
    </form>
  );
}
