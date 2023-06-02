import { MapPinLine } from "@phosphor-icons/react";
import { FormAddressContainer } from "./Address.styles";
import { useContext } from "react";
import { DeliveryContext } from "../../../../contexts/DeliveryContext";

export function FormAddress() {
  const { formStateError, orderNotExist, register } =
    useContext(DeliveryContext);

  return (
    <FormAddressContainer>
      <div>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <label htmlFor="cep">
        <input
          type="number"
          id="cep"
          placeholder="CEP"
          disabled={orderNotExist}
          {...register("cep", { valueAsNumber: true })}
        />
        <span>{formStateError.cep && String(formStateError.cep?.message)}</span>
      </label>

      <label htmlFor="street">
        <input
          type="text"
          id="street"
          placeholder="Rua"
          disabled={orderNotExist}
          {...register("street", { required: true })}
        />
        <span>
          {formStateError.street && String(formStateError.street?.message)}
        </span>
      </label>

      <div className="row3">
        <label htmlFor="number">
          <input
            type="number"
            id="number"
            placeholder="Número"
            disabled={orderNotExist}
            {...register("number", { valueAsNumber: true, required: true })}
          />
          <span>
            {formStateError.number && String(formStateError.number?.message)}
          </span>
        </label>
        <label htmlFor="complement">
          <input
            type="text"
            id="complement"
            placeholder="Complemento"
            disabled={orderNotExist}
            {...register("complement")}
          />
        </label>
      </div>

      <div className="row4">
        <label htmlFor="district">
          <input
            type="text"
            id="district"
            placeholder="Bairro"
            disabled={orderNotExist}
            {...register("district", { required: true })}
          />
          <span>
            {formStateError.district &&
              String(formStateError.district?.message)}
          </span>
        </label>
        <label htmlFor="city">
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            disabled={orderNotExist}
            {...register("city", { required: true })}
          />
          <span>
            {formStateError.city && String(formStateError.city?.message)}
          </span>
        </label>
        <label htmlFor="uf">
          <input
            type="text"
            id="uf"
            placeholder="UF"
            disabled={orderNotExist}
            {...register("uf", { required: true })}
          />
          <span>{formStateError.uf && String(formStateError.uf?.message)}</span>
        </label>
      </div>
    </FormAddressContainer>
  );
}
