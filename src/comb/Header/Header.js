import React from "react";
import Nav from "./components/NavLinks/nav";

import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
const Header = (searchbtn1) => {
  return (
    <div>
      <Nav searchbtn1={searchbtn1} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
