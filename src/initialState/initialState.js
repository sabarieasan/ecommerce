import {
  fetchLoginInfo,
  fetchUser,
} from "../until.Reducers/fetchLocalStoregeData";
import { logout } from "../until.Reducers/useAuthentication";

const loginInfo = fetchLoginInfo();
const userInfo = fetchUser();
const logoutInfo = logout();

export const initialState = {
  user: userInfo,
  isLogin: loginInfo,
  Logout: logoutInfo,
  foodItems: null,
  cartShow: false,
  cartItems: null,
  subTotal: 0,

  userDetails: null,
};
