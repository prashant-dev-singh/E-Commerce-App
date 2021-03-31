import React, { useState } from "react";

import Cart from "./Cart";
import Products from "./Products";
import WishList from "./WishList";

export default function App() {
  const [route, setRoute] = useState("Products");

  return (
    <>
      <div className="App">
        <h1> E-COMMERCE APP </h1>
        <button
          className="primary-button"
          style={{ margin: "1rem" }}
          onClick={() => {
            setRoute("Products");
          }}
        >
          Product
        </button>
        <button
          className="primary-button"
          style={{ margin: "1rem" }}
          onClick={() => {
            setRoute("Cart");
          }}
        >
          Cart
        </button>

        <button
          className="primary-button"
          style={{ margin: "1rem" }}
          onClick={() => {
            setRoute("WishList");
          }}
        >
          WishList
        </button>
        {route === "Products" && <Products setRoute={setRoute} />}
        {route === "Cart" && <Cart />}
        {route === "WishList" && <WishList setRoute={setRoute} />}
      </div>
    </>
  );
}
