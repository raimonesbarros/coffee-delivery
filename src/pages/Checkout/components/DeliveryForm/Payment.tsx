import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { FormOfPaymentContainer, PaymentTypeSelect } from "./Payment.styles";
import { useContext } from "react";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";

export function PaymentForm() {
  const { formStateError, orderNotExist, register } =
    useContext(DeliveryContext);

  return (
    <FormOfPaymentContainer>
      <div>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <PaymentTypeSelect>
        <label htmlFor="payment">
          <label htmlFor="creditCard">
            <CreditCard size={16} /> Cartão de Crédito
            <input
              type="radio"
              id="creditCard"
              value="Cartão de crédito"
              disabled={orderNotExist}
              {...register("payment")}
            />
          </label>
          <label htmlFor="debitCard">
            <Bank size={16} /> Cartão de Débito
            <input
              type="radio"
              id="debitCard"
              value="Cartão de débito"
              disabled={orderNotExist}
              {...register("payment")}
            />
          </label>
          <label htmlFor="cash">
            <Money size={16} /> Dinheiro
            <input
              type="radio"
              id="cash"
              value="Dinheiro"
              disabled={orderNotExist}
              {...register("payment")}
            />
          </label>
          <span>
            {formStateError.payment && String(formStateError.payment?.message)}
          </span>
        </label>
      </PaymentTypeSelect>
    </FormOfPaymentContainer>
  );
}
