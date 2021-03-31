import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./CartContext";
import "./index.css";
import App from "./App";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);
