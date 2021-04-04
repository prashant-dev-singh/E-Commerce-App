import { CartContext, checkItemExist } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Product = ({ setRoute }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async function () {
      axios
        .get("/api/products")
        .then(function (response) {
          setProducts(response.data.products);
          setLoading(false);
        })
        .catch(function (error) {
          // console.log(error);
        });
    })();
  }, []);

  const getSortedData = (productList, sortby) => {
    if (sortby && sortby === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b.price - a.price);
    }

    if (sortby && sortby === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a.price - b.price);
    }
    return productList;
  };

  const getFilterData = (productList, filterInstock) => {
    if (filterInstock) return productList.filter((item) => item.inStock);
    else return productList;
  };

  const getFilterDelivery = (productList, filterDelivery) => {
    if (filterDelivery) return productList.filter((item) => item.fastDelivery);
    else return productList;
  };

  const { state, dispatch, state_filter, dispatch_filter } = useContext(
    CartContext
  );

  const { cartItems, wishList } = state;
  const { sortby, filterInstock, filterDelivery } = state_filter;
  const sortedData = getSortedData([...products], sortby);

  const filterInStock = getFilterData([...sortedData], filterInstock);
  const filterData = getFilterDelivery([...filterInStock], filterDelivery);

  const LoadingState = () => {
    return (
      <>
        <h2
          style={{
            margin: "auto",
          }}
        >
          <i className="fa fa-spinner fa-spin" style={{ fontSize: "30px" }}></i>
        </h2>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="App"
      >
        <div
          style={{
            border: "1px solid #D1D5DB",
            borderRadius: "5px",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            marginTop: "3rem",
            marginLeft: "1rem",
            height: "80vh",
            position: "fixed",
          }}
        >
          <h3>Filters</h3>
          <div style={{ margin: "0.5rem" }}>
            <label>
              <input
                onChange={() =>
                  dispatch_filter({
                    type: "SORT",
                    payload: "PRICE_HIGH_TO_LOW",
                  })
                }
                name="sort"
                type="radio"
                checked={sortby && sortby === "PRICE_HIGH_TO_LOW"}
              ></input>{" "}
              Price-High to Low{" "}
            </label>
          </div>

          <div style={{ margin: "0.5rem" }}>
            <label>
              <input
                onChange={() =>
                  dispatch_filter({
                    type: "SORT",
                    payload: "PRICE_LOW_TO_HIGH",
                  })
                }
                name="sort"
                type="radio"
                checked={sortby && sortby === "PRICE_LOW_TO_HIGH"}
              ></input>{" "}
              Price-Low to High
            </label>
          </div>

          <div style={{ margin: "0.5rem" }}>
            <label>
              <input
                onChange={() =>
                  dispatch_filter({
                    type: "INSTOCK",
                    payload: !filterInstock,
                  })
                }
                checked={filterInstock}
                name="chkInstock"
                type="checkbox"
              ></input>
              In Stock
            </label>
          </div>
          <div style={{ margin: "0.5rem" }}>
            <label>
              <input
                onChange={() =>
                  dispatch_filter({
                    type: "FASTDELVIERY",
                    payload: !filterDelivery,
                  })
                }
                checked={filterDelivery}
                name="chkDelivery"
                type="checkbox"
              ></input>
              Fast Delivery
            </label>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            //  border: "1px solid blue",
            flexWrap: "wrap",
            width: "80%",
            padding: "2rem",
            marginLeft: "25%",
          }}
        >
          {loading ? (
            <LoadingState />
          ) : (
            filterData.map(
              ({
                id,
                name,
                image,
                price,
                material,
                brand,
                inStock,
                fastDelivery,
                ratings,
                offer,
              }) => {
                return (
                  <div className="card-prd" key={id}>
                    <img src={image} className="card-img" alt="" />
                    <span className="card-badge">New</span>
                    <span
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
                          fontSize: "24px",
                          color: checkItemExist(wishList, id) ? "Red" : "White",
                        }}
                        className="fa fa-heart card-bdg-wish"
                      ></i>
                    </span>
                    <h3> {name} </h3>
                    <p>Rs. {price}</p>
                    <p> {inStock ? "In Stock" : "Out of Stock"}</p>
                    <p>
                      {fastDelivery ? "Fast Delivery" : "Standard Delivery"}
                    </p>
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
              }
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
