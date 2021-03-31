import { useContext, useState } from "react";

import { CartContext } from "./CartContext";

const Cart = () => {
  const getTotal = (items) => {
    return items.reduce((total, item) => {
      return (total = total + item.qty * item.price);
    }, 0);
  };

  const { state, dispatch } = useContext(CartContext);
  const { cartItems, wishlist } = state;
  // console.log(state);
  return (
    <>
      <div className="App">
        <h2>CART </h2>
        <h2>TOTAL : {getTotal(cartItems)}</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cartItems.map(({ id, name, image, price, qty }) => {
            return (
              <>
                <div className="card-prd">
                  <img src={image} className="card-img" alt="" />
                  <span
                    className="card-bdg-wish"
                    onClick={() =>
                      dispatch({
                        type: "DELETE",
                        id: id,
                      })
                    }
                  >
                    <i className="fa icon">&#xf00d;</i>
                  </span>
                  <h3> {name} </h3>
                  <div>Rs. {price}</div>
                  <button
                    onClick={() => dispatch({ type: "INCREMENT", id: id })}
                  >
                    +
                  </button>
                  {qty}
                  <button
                    onClick={() => dispatch({ type: "DECREMENT", id: id })}
                  >
                    -
                  </button>
                  {/* <button onClick={() => dispatch({ type: "DELETE", id: id })}>
                    Remove
                  </button> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
