import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { OrderContextProvider } from "./contexts/OrderContext";
import { DeliveryContextProvider } from "./contexts/DeliveryContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <DeliveryContextProvider>
            <Router />
          </DeliveryContextProvider>
        </OrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
