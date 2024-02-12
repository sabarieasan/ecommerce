import React from "react";
import { useState } from "react";
import "../pages/style/Contact.css";
const Contact = () => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      header: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const res = await fetch(
      "https://e-commerce-ea40e-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Your Message sent");
    } else {
      alert("An error occured");
    }
  };
  return (
    <>
      <div className="contact_container">
        <div className="contant">
          <h2># Contact us</h2>
          <div className="form">
            <form className="POST">
              <input
                type="text"
                name="Name"
                value={user.Name}
                placeholder="Enter your full name"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="email"
                name="Email"
                value={user.Email}
                placeholder="Enter your Email"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="text"
                name="Subject"
                value={user.Subject}
                placeholder="Enter your Subject"
                required
                autoComplete="off"
                onChange={data}
              />
              <textarea
                name="Message"
                value={user.Message}
                placeholder="Enter the message"
                autoComplete="off"
                onChange={data}
              ></textarea>
              <button type="submit" onClick={senddata}>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
