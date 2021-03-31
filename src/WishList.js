import { CartContext, checkItemExist } from "./CartContext";
import { useContext } from "react";

const WishList = ({ setRoute }) => {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems, wishList } = state;

  return (
    <>
      <h2>WISHLIST</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {wishList.map(({ id, name, image, price }) => {
          return (
            <div className="card-prd" key={id}>
              <img src={image} className="card-img" alt="" />
              <span className="card-badge">New</span>
              <span
                className="card-bdg-wish"
                onClick={() =>
                  dispatch({
                    type: "REMOVEFROMWISHLIST",
                    id: id,
                  })
                }
              >
                <i className="fa icon">&#xf00d;</i>
              </span>
              <h3> {name} </h3>
              <p>Rs. {price}</p>
              <p>
                {" "}
                <button
                  className="card-btn"
                  onClick={() =>
                    checkItemExist(cartItems, id)
                      ? dispatch({
                          type: "REMOVEFROMWISHLIST",
                          id: id,
                        })
                      : dispatch({
                          type: "ADDFROMWISHTOCART",
                          item: { id, name, image, price, qty: 1 },
                        })
                  }
                >
                  Move to Cart
                </button>{" "}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishList;
