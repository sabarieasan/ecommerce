import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/style/Cart.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../contexts/context";
// import { actionType } from "../../context/reducer";
import { actionType } from "../until.Reducers/Reducer";
const Cart = () => {
  const [{ cartShow, cartItems, subTotal }, dispatch] = useStateValue();
  const navigate = useNavigate();
  console.log(cartItems);
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });
    toast.success("Successfully Clear Cart");
  };

  const checkOut = () => {
    dispatch({
      type: actionType.SET_CHECKOUT,
      cartItems: [],
      cartShow: !cartShow,
    });

    toast.success("order has been placed");
  };

  const increaseItem = (id) => {
    dispatch({
      type: actionType.SET_INCREASE_ITEM,
      payload: { id: id },
      cartItems: [],
    });
    toast.success("AddCartSuccessfully ");
  };

  const decreaseItem = (id) => {
    dispatch({
      type: actionType.SET_DECREASE_ITEM,
      payload: { id: id },
    });
    toast.success("Successfully removed from Cart");
  };

  useEffect(() => {
    dispatch({
      type: actionType.SET_UPDATE_TOTAL,
    });
  }, [cartItems]);
  // Total price
  const Totalprice = cartItems.reduce(
    (price, item) => price + item.quantity * item.Price,
    0
  );
  const OrderNow = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });
    navigate("/");
    toast.success("Your order as been placed");
  };
  return (
    <div>
      <div className="cart-page">
        <div className="cart-container">
          {cartItems.length === 0 && (
            <div className="emptycart">
              <h2 className="empty">Cart is Empty</h2>
              <Link to="/product" className="emptycartbtn">
                Shop Now
              </Link>
            </div>
          )}
          <div className="contant">
            {cartItems.map((curElm) => {
              return (
                <div className="cart_item" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h4>{curElm.Cat}</h4>
                      <h3>{curElm.Title}</h3>
                      <p>Price: ${curElm.Price}</p>
                      <div className="qty">
                        <button
                          className="incqty"
                          onClick={() => increaseItem(curElm.id)}
                        >
                          +
                        </button>
                        <input type="text" value={curElm.quantity}></input>
                        <button
                          className="decqty"
                          onClick={() => decreaseItem(curElm.id)}
                        >
                          -
                        </button>
                      </div>
                      <h4 className="subtotal">
                        sub total: ${curElm.Price * curElm.quantity}
                      </h4>
                    </div>
                    <div className="close">
                      <button onClick={() => decreaseItem(curElm.id)}>
                        <AiOutlineClose />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {cartItems.length > 0 && (
            <div className="totals">
              <h2 className="totalprice">total: $ {Totalprice}</h2>
              <button className="checkout" onClick={OrderNow}>
                Checkout
              </button>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
