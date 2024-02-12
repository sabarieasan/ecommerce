export const actionType = {
  SET_USER: "SET_USER",
  SET_LOGOUT: "SET_LOGOUT",
  CLEAR_CART: "CLEAR_CART",

  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CHECKOUT: "SET_CHECKOUT",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_INCREASE_ITEM: "SET_INCREASE_ITEM",
  SET_DECREASE_ITEM: "SET_DECREASE_ITEM",
  SET_UPDATE_TOTAL: "SET_UPDATE_TOTAL",
  SET_USER_DETAILS: "SET_USER_DETAILS",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
        isLogin: action.isLogin,
      };

    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CHECKOUT:
      return {
        ...state,
        cartShow: action.cartShow,
        cartItems: action.cartItems,
      };

    case actionType.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };

    case actionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    case actionType.SET_INCREASE_ITEM:
      const increasedCart = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartItems: increasedCart,
      };

    case actionType.SET_DECREASE_ITEM:
      const decreasedCart = state.cartItems
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        cartItems: decreasedCart,
      };

    case actionType.SET_UPDATE_TOTAL:
      const updatedQuantity = state.cartItems.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0);
      const updatePrice = state.cartItems.reduce((prev, curr) => {
        const amount = curr.quantity * curr.Price;
        return prev + amount;
      }, 0);
      return {
        ...state,
        subTotal: updatePrice,
        totalQuantity: updatedQuantity,
      };
    case actionType.SET_LOGOUT:
      return { ...state, user: null, isLogin: action.isLogin };

    default:
      return state;
  }
};
