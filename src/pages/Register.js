import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/Register.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firestore/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setErrorMsg] = useState(false);
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(userName);
  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const collectionRef = collection(db, "users");
        addDoc(collectionRef, {
          id: user.uid,
          userName: userName,

          email: user.email,
          gender: gender,
          number: number,
        });
        updateProfile(user, {
          displayName: userName,
        });
        console.log(userName);
        setEmail("");
        setPassword("");

        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const resetHandel = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="back-res">
      <div className="res">
        <form className="register">
          <div className="hed">
            <h4 className="register-hd">Register</h4>
          </div>

          <div className="inputRegister">
            {/* <div>
              <label htmlFor="userName"></label>
              <input
                type="text"
                placeholder="userName"
                label="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div> */}
            <div>
              <label htmlFor="email address"></label>
              <input
                type="email"
                label="Email address"
                placeholder="Enter the @Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                label="password"
                placeholder="Enter the Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <div>
              <label htmlFor="number"></label>
              <input
                type="number"
                label="number"
                placeholder="Enter the Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div> */}
            {/* <input type="number" placeholder="Mobile Number" /> */}
          </div>
          {/* <div className="select-op">
            <div className="select">
              <label htmlFor="choose">choose Gender</label>
              <select
                type="occupation"
                name="occupation"
                label="gender"
                placeholder="Enter the Number"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <span></span>
                <option>open this select menu</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
              </select>
            </div>
          </div> */}
          {/* <div className="image-box">
            <label htmlFor="image">choose the image</label>
            <input
              type="file"
              label="image"
              placeholder="Enter the Number"
              className="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div> */}
          {/* <b className="error">{errorMsg}</b> */}
          <div className="btn">
            <button className="submit-btn-btn" type="submit" onClick={onSubmit}>
              Submit
            </button>
            <button className="reset-btn" onClick={resetHandel}>
              Reset
            </button>
          </div>
          <p className="error">{error}</p>
          <div className="log-link">
            <span>Have an account? </span>
            <Link to="/" className="link">
              click to here Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
