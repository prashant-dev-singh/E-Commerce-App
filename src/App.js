import React, { useState, useContext } from "react";
import "./index.css";
import Cart from "./Cart";
import Products from "./Products";
import WishList from "./WishList";
import { CartContext } from "./CartContext";

export default function App() {
  const [route, setRoute] = useState("Products");
  const { state } = useContext(CartContext);
  const { cartItems, wishList } = state;

  return (
    <>
      <div className="App">
        <ul className="navbar">
          <li>
            <button
              className="nav-list-btn"
              style={{ margin: "1rem" }}
              onClick={() => {
                setRoute("Products");
              }}
            >
              HOME
            </button>
          </li>
          <input className="navbar-txtbx"></input>
          <div className="navbar-itm-rgt">
            <li className="navbar-list">
              <button
                className="nav-list-btn"
                style={{ margin: "1rem" }}
                onClick={() => {
                  setRoute("Products");
                }}
              >
                PRODUCTS
              </button>
            </li>
            <li className="navbar-list">
              <button
                className="nav-list-btn"
                style={{ margin: "1rem" }}
                onClick={() => {
                  setRoute("Cart");
                }}
              >
                CART
                <i
                  style={{
                    fontSize: "20px",
                  }}
                  className="fa fa-shopping-cart"
                ></i>
                <span
                  style={{
                    color: "red",
                    fontSize: "20px",
                  }}
                >
                  <b> {cartItems.length > 0 ? cartItems.length : null}</b>
                </span>
              </button>
            </li>
            <li className="navbar-list">
              <button
                className="nav-list-btn"
                style={{ margin: "1rem" }}
                onClick={() => {
                  setRoute("WishList");
                }}
              >
                WISHLIST{" "}
                <i
                  style={{
                    fontSize: "18px",
                  }}
                  className="fa fa-heart"
                ></i>
                <span
                  style={{
                    color: "red",
                    fontSize: "20px",
                  }}
                >
                  <b> {wishList.length > 0 ? wishList.length : null}</b>
                </span>
              </button>
            </li>
          </div>
        </ul>

        {route === "Products" && <Products setRoute={setRoute} />}
        {route === "Cart" && <Cart />}
        {route === "WishList" && <WishList setRoute={setRoute} />}
      </div>
    </>
  );
}
