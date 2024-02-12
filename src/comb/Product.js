import React, { useState, useEffect } from "react";
import "../pages/style/Product.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCart2 } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Productdetail } from "../Productdetail";
import { actionType } from "../until.Reducers/Reducer";
import { useStateValue } from "../contexts/context";
import { UseCartGlobalContext } from "../contexts/cartContext";
import { useSearchValue } from "../contexts/SearchProvider";
const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  searchbtn,
}) => {
  const [{ foodItems, cartItems, isLogin }, dispatch] = useStateValue();
  const { search, setSearch } = useSearchValue("");
  const [items, setItems] = useState([]);
  const [data, setData] = useState(foodItems);

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

  const filtterproduct = (product) => {
    const update = Productdetail.filter((X) => {
      return X.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(Productdetail);
  };
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
                    <p className="qty-1">{curElm.quantity}</p>
                    <p>
                      {" "}
                      A Screen Will Love: Whether your family is streaming or
                      video chatting with friends tablet AB...
                    </p>
                    <h3>{curElm.Price}</h3>
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
      <div className="products">
        <div className=" search_box">
          <input
            type="text"
            value={search}
            placeholder="Enter The Product Name"
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          {/* <button onClick={() => searchbtn(search)}>search</button> */}
        </div>
        <h2># Products</h2>
        <p>Home. Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>

                <li onClick={() => filtterproduct("Camera")}>Camera</li>

                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product
                .filter((curElm) => {
                  return search.toLowerCase() === ""
                    ? curElm
                    : curElm.Cat.toLowerCase().includes(search);
                })
                .map((curElm) => {
                  return (
                    <>
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
                          <h4>${curElm.Price}</h4>
                          <p className="qty-1">{curElm.quantity}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Product;
