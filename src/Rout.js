import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./comb/Home";
import Product from "./comb/Product";

import Footer from "./comb/Header/components/footer/Footer";
import { Productdetail } from "./Productdetail";
import HomeProduct from "./HomeProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cantact from "./comb/Contact";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import Header from "./comb/Header/Header";
import { auth } from "./firestore/firebase-config";
import { useState, useEffect } from "react";
import { AuthContext, useAuthContext } from "./contexts/Authcontext";
import Cart from "./comb/Cart";
const Rout = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  cart,
  setCart,
  addtocart,
  setIsAuth,
  searchbtn,
  IsAuth,
  searchbtn1,
  homeProduct,
  setHomeProduct,
}) => {
  // const { isLogin, setIsLogin } = useStateValue();
  const { userLogin } = useAuthContext();
  // console.log(isLogin);

  //login condition

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            userLogin ? (
              <Header
                IsAuth={IsAuth}
                homeProduct={homeProduct}
                searchbtn1={searchbtn1}
              />
            ) : (
              <Login setIsAuth={setIsAuth} />
            )
          }
        >
          <Route
            index={true}
            element={
              <Home
                product={product}
                setProduct={setProduct}
                detail={detail}
                view={view}
                close={close}
                setClose={setClose}
                addtocart={addtocart}
                IsAuth={IsAuth}
                searchbtn1={searchbtn1}
                homeProduct={homeProduct}
                setHomeProduct={setHomeProduct}
              />
            }
          />
          <Route
            path="/Product"
            element={
              <Product
                product={product}
                setProduct={setProduct}
                detail={detail}
                view={view}
                close={close}
                setClose={setClose}
                addtocart={addtocart}
                searchbtn={searchbtn}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/contact" element={<Cantact />} />
        </Route>
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </>
  );
};

export default Rout;
