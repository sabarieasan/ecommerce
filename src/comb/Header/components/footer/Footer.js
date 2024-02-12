import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./img/LOGO.png" alt="logo" className="logo-img"></img>
            </Link>
          </div>

          {/* <div className="icon">
            <li>
              <Link to="">
                {" "}
                <RiFacebookFill />
              </Link>
            </li>
            <li>
              <Link to="">
                {" "}
                <AiOutlineInstagram />
              </Link>
            </li>

            <li>
              <Link to="">
                <AiFillLinkedin />
              </Link>
            </li>
          </div> */}

          <div className="desc-footer">
            <h4>
              ©2023 All Rights Reserverd. This template is made with by ❤️{" "}
              <span>sabari</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
