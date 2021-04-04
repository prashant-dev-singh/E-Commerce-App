import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./CartContext";
import setupMockServer from "./Data.js";
import App from "./App";

setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <UseCart.Provider value={{ name: "Dev" }}> */}

    <CartProvider>
      <App />
    </CartProvider>

    {/* </UseCart.Provider> */}
  </StrictMode>,
  rootElement
);
