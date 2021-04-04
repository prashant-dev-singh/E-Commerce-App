import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const getTotal = (items) => {
    return items.reduce((total, item) => {
      return (total = total + item.qty * item.price);
    }, 0);
  };

  const { state, dispatch } = useContext(CartContext);
  const { cartItems } = state;

  return (
    <>
      <div className="App">
        <h2>TOTAL : {getTotal(cartItems)}</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            padding: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch({ type: "INCREMENT", id: id })}
                  >
                    +
                  </span>
                  {qty}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      qty > 1
                        ? dispatch({ type: "DECREMENT", id: id })
                        : dispatch({ type: "DELETE", id: id })
                    }
                  >
                    -
                  </span>
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
