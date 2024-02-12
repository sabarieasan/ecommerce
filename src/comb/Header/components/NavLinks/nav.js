import React, { useEffect, useState } from "react";
import "../NavLinks/Nav.css";
import heart from "../../../../image/images/heart.png";
import { Link, Outlet } from "react-router-dom";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { auth } from "../../../../firestore/firebase-config";
import { useAuthContext } from "../../../../contexts/Authcontext";
import { UseCartGlobalContext } from "../../../../contexts/cartContext";
import { actionType } from "../../../../until.Reducers/Reducer";
import { useStateValue } from "../../../../contexts/context";
import { useSearchValue } from "../../../../contexts/SearchProvider";
//(props)
function Nav() {
  const [heartIcon, setHeartIcon] = useState(false);
  const { userName, setUserName, setUserLogin } = useAuthContext();
  const { search, setSearch } = useSearchValue("");
  const [{ user, cartItems, cartShow }, dispatch] = useStateValue();
  const [name, setName] = useState("");

  const handelLogout = () => {
    setUserLogin(false);
    localStorage.clear();
  };
  const heart = (e) => {
    e.preventDefault();
    setHeartIcon("liked");
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="free">
          <div className="icon">
            <FaTruckMoving />
          </div>
          <p> Free Shiping when Shopping upto $1000</p>
        </div>
        <div className="main_header">
          <div className="container">
            <Link to="/">
              <div className="logo">
                <img
                  src="./img/LOGO.png"
                  alt="logo"
                  className="logo-img"
                  width="100px"
                ></img>
              </div>
            </Link>
            <div className="icon">
              <div className="account">
                <div className="user_icon">
                  <Link to="/userprofile">
                    <BiUserCircle />
                  </Link>
                </div>
                {/* <p>{userName.name ? `${setUserName.name}` : "profile"}</p> */}
                <p className="userpeofile">profile</p>
              </div>
              <div className="second_icon">
                <Link to="/home" className="link">
                  {" "}
                  {/* <AiOutlineHeart /> */}
                  {/* <img src={heart} alt={heart}></img> */}
                  <div className="like-button">
                    <div className="heart-bg">
                      <span className="heart-icon"></span>
                    </div>
                  </div>
                </Link>
                <Link to="/cart" className="link">
                  {" "}
                  <BsBagCheck />
                  {cartItems && cartItems.length > 0 && (
                    <p className="product-quantity">{cartItems.length}</p>
                  )}
                </Link>
                <div className="amount-container">
                  <p className="total-amount">{}</p>
                </div>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="nav">
              <ul>
                <li>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="link">
                    Product
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="link">
                    contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="auth">
              <div className="auth-container">
                <button onClick={handelLogout}>
                  {" "}
                  <BiLogOut />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default Nav;
