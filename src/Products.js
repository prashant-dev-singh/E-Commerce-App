
import { CartContext, checkItemExist } from "./CartContext";
import { useContext } from "react";
import { data } from "./Data";
import WishList from "./WishList";

const Product = ({ setRoute }) => {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems, wishList } = state;

  return (
    <>
      <div className="App">
        <h2>PRODUCTS </h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map(({ id, name, image, price }) => {
            return (
              <div className="card-prd" key={id}>
                <img src={image} className="card-img" alt="" />
                <span className="card-badge">New</span>
                <span
                  className="card-bdg-wish"
                  onClick={() =>
                    checkItemExist(wishList, id)
                      ? dispatch({
                          type: "REMOVEFROMWISHLIST",
                          id: id,
                        })
                      : dispatch({
                          type: "ADDTOWISHLIST",
                          item: { id, name, image, price, qty: 1 },
                        })
                  }
                >
                  <i
                    style={{
                      backgroundColor: checkItemExist(wishList, id)
                        ? "Red"
                        : "White",
                    }}
                    className="fa icon"
                  >
                    &#xf08a;
                  </i>
                </span>
                <h3> {name} </h3>
                <p>Rs. {price}</p>
                <p>
                  {" "}
                  <button
                    className="card-btn"
                    onClick={() =>
                      checkItemExist(cartItems, id)
                        ? setRoute("Cart")
                        : dispatch({
                            type: "ADDTOCART",
                            item: { id, name, image, price, qty: 1 },
                          })
                    }
                  >
                    {checkItemExist(cartItems, id)
                      ? "Move to Cart"
                      : "Add to Cart"}
                  </button>{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
