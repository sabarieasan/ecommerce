import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
// import { cartReducers } from "../until.Reducers/cartReducer";

import { Productdetail } from "../Productdetail";
const CartContext = createContext();
export const initialState = {
  cart: Productdetail,
  totalQuantity: 0,
  totalPrice: 0,
  item: null,
};

const CartProvider = ({ children }) => {
  // const [cart ,setCart] = useState(ProductsData);
  const [state, dispatch] = useReducer(initialState);
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   dispatch({ type: "UPDATE_TOTALS" });
  // }, [state.cart]);

  // const clearCart = () => {
  //   dispatch({ type: "CLEAR_CART" });
  // };
  // const removeItem = (id) => {
  //   dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  // };
  // const increaseItem = (id) => {
  //   console.log(id);
  //   dispatch({ type: "INCREASE_ITEM", payload: { id: id } });
  // };
  // const decreaseItem = (id) => {
  //   dispatch({ type: "DECREASE_ITEM", payload: { id: id } });
  // };
  // const handleClick = (id) => {
  //   dispatch({ type: "INCREASED_CART", payload: { id: id } });
  // };
  // const addCart = (id) => {
  //   dispatch({
  //     typeL: "SET_CART_ITEMS",
  //     payload: { id: id },

  //     item: items,
  //   });
  // };
  // useEffect(() => {
  //   addCart();
  // }, [items]);
  return (
    <CartContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const UseCartGlobalContext = () => {
  return useContext(CartContext);
};

export { CartProvider, CartContext, UseCartGlobalContext };
