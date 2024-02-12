import React from "react";
import { useState, useEffect } from "react";
import "../pages/style/Home.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { useSearchValue } from "../contexts/SearchProvider";
import { useStateValue } from "../contexts/context";
import { actionType } from "../until.Reducers/Reducer";
import HomeProduct from "../HomeProduct";
const Home = ({ detail, view, close, setClose, homeProduct, searchbtn1 }) => {
  // const [homeProduct, setHomeProduct] = useState(HomeProduct);
  const { allProduct } = useSearchValue();
  const [{ foodItems, cartItems, isLogin }, dispatch] = useStateValue();

  const [items, setItems] = useState([]);
  const [data, setData] = useState(foodItems);
  const { search, setSearch } = useSearchValue("");
  console.log(search);
  const clickOrder = (item) => {
    setItems([...cartItems, item]);

    toast.success("Successfully Add To Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });

    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    setData(
      foodItems && foodItems.filter((item) => item.category !== "gallery")
    );

    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [foodItems]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      {" "}
                      A Screen Will Love: Whether your family is streaming or
                      video chatting with friends tablet AB...
                    </p>
                    <h3>{curElm.Price}</h3>
                    <p className="qty-1">{curElm.quantity}</p>
                    <button onClick={() => clickOrder(curElm)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className=" search_box-1">
        <input
          type="text"
          value={search}
          placeholder="Enter The Product Name"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {/* <button onClick={() => searchbtn1(search)}>search</button> */}
      </div>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Laptop Colletion 2023</h2>
            <Link to="/product">
              shop Now
              <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="./img/slider1-img.jpg"
              alt="slider-img"
              // width="480px"
              className="slider"
            ></img>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="./img/Mobile phone.png" alt="Mobile" />
            </div>
            <div className="details">
              <p className="small-pd">20 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/headphone.png" alt="headphone" />
            </div>
            <div className="details">
              <p className="small-pd">50 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/smart watch.png" alt="watch" />
            </div>
            <div className="details">
              <p className="small-pd">64 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/Alexxa.jpg" alt="alexxa" />
            </div>
            <div className="details">
              <p className="small-pd">63 products</p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="box">
              <div className="icon">
                <FiTruck />
              </div>
              <div className="detail">
                <h3>Free Shipping</h3>
                <p>Oder above $1000</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <BsCurrencyDollar />
              </div>
              <div className="detail">
                <h3>Return & Refund</h3>
                <p>Money Back Gaurenty</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <CiPercent />
              </div>
              <div className="detail">
                <h3>Member Discount</h3>
                <p>On every Oder</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaHeadphones />
              </div>
              <div className="detail">
                <h3>Customer Support</h3>
                <p>every Time call Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeProduct
            .filter((curElm) => {
              return search.toLowerCase() === ""
                ? curElm
                : curElm.Cat.toLowerCase().includes(search);
            })
            .map((curElm) => {
              return (
                <div className="box" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title}></img>

                    <div className="icon">
                      <li onClick={() => clickOrder(curElm)}>
                        {" "}
                        <BsCart2 />
                      </li>
                      <li onClick={() => view(curElm)}>
                        {" "}
                        <BsEye />
                      </li>
                      <li> </li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.Price}</h4>
                    <p className="qty-1">{curElm.quantity}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Sony WH-CH520,wireless on-Ear bluetooth headphones</h3>
            <p>
              <BsCurrencyDollar />
              986
            </p>
            <Link to="/product" className="link">
              Shop Now
              <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="./img/image-11.jpg"
              alt="sliderimg"
              className="slider-1"
            ></img>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
