import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./CartContext";
import "./index.css";
import App from "./App";
import Cart from "./Cart";

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
