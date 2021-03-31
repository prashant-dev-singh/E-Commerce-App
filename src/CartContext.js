import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const checkItemExist = (arr, id) => {
  return arr.find((curr) => curr.id === id);
};

const ItemsInCart = {
  cartItems: [],
  wishList: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, ItemsInCart);
  return (
    <>
      <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

const cartReducer = (state, action) => {
  const { cartItems, wishList } = state;
  //const { id, name, image, price, qty } = action;

  //console.log(action);
  // console.log(action.item.name);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cartItems: cartItems.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cartItems: cartItems.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    case "DELETE":
      return {
        ...state,
        cartItems: cartItems.filter((item) => item.id !== action.id),
      };
    case "ADDTOCART":
      return { ...state, cartItems: cartItems.concat(action.item) };

    //cartItems: cartItems.concat(item)

    case "ADDFROMWISHTOCART":
      return {
        ...state,
        cartItems: [...cartItems, action.item],
        wishList: wishList.filter((item) => item.id !== action.item.id),
      };
    case "ADDTOWISHLIST":
      return {
        ...state,
        wishList: [...wishList, action.item],
      };
    case "REMOVEFROMWISHLIST":
      return {
        ...state,
        wishList: wishList.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

// if (action.type === "DELETE") {
//   const temp = [...state].filter((val) => val.id !== action.id);
//   console.log(temp);
//   return temp;
// }

// if (action.type === "INCREMENT") {
//   const updatedProdList = [...state].map((curr) =>
//     curr.id === action.id ? { ...curr, qty: curr.qty + 1 } : curr
//   );

//   return updatedProdList;
