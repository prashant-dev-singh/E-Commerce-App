import React, { useState } from "react";

import Cart from "./Cart";
import Products from "./Products";
import WishList from "./WishList";

export default function App() {
  const [route, setRoute] = useState("Products");

  return (
    <>
      <div className="App">
        <ul class="navbar">
          <li>
            <a href="https://sport-ecart.netlify.app/">HOME</a>
          </li>
          <input class="navbar-txtbx"></input>
          <div class="navbar-itm-rgt">
            <li class="navbar-list">
              <a href="https://sport-ecart.netlify.app/">PRODUCTS</a>
            </li>
            <li class="navbar-list">
              <a href="https://sport-ecart.netlify.app/">CART</a>
            </li>
            <li class="navbar-list">
              <a href="https://sport-ecart.netlify.app/">WISHLIST</a>
            </li>
          </div>
        </ul>

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
