import { ReactNode, createContext, useContext } from "react";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { OrderContext } from "./OrderContext";

interface DeliveryContextProps {
  children: ReactNode;
}

const deliveryAddressValidationSchema = z.object({
  cep: z
    .number({
      required_error: "Campo obrigatório",
      invalid_type_error: "Campo obrigatório",
    })
    .min(10000000, "Insira um cep válido")
    .max(99999999, "Insira um cep válido"),
  city: z.string().min(1, "Campo obrigatório"),
  district: z.string().min(1, "Campo obrigatório"),
  number: z.number({
    required_error: "Campo obrigatório",
    invalid_type_error: "Campo obrigatório",
  }),
  payment: z.string({
    required_error: "Selecione uma forma de pagamento",
    invalid_type_error: "Selecione uma forma de pagamento",
  }),
  street: z.string().min(1, "Campo obrigatório"),
  uf: z.string().min(2, "ex: TO").max(2, "ex: TO"),
});

interface DeliveryContextType {
  submitting: boolean;
  orderNotExist: boolean;
  formStateError: FieldErrors<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  register: UseFormRegister<FieldValues>;
  handleConfirmOrder(data: FieldValues): void;
}

export const DeliveryContext = createContext({} as DeliveryContextType);

export function DeliveryContextProvider({ children }: DeliveryContextProps) {
  const { cart } = useContext(OrderContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    resolver: zodResolver(deliveryAddressValidationSchema),
  });

  const submitting = isSubmitting;
  const orderNotExist = cart.length === 0;

  const formStateError = errors;

  function handleConfirmOrder(data: SubmitHandler<FieldValues>) {
    //localStorage.setItem("@coffeeDelivery1.0.0", JSON.stringify(data));
    reset();
    
    //window.location.href = "http://localhost:5173/success";
    
    return <Link to={"/success"}>

  }

  return (
    <DeliveryContext.Provider
      value={{
        submitting,
        orderNotExist,
        formStateError,
        handleSubmit,
        register,
        handleConfirmOrder,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
}
