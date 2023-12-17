import React, { useEffect, useState } from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //life cycle manage
  // 3 life cycle
  // 1 did mount -> first time render krna
  // 2 did update -> koi value udpate ho tab render krna
  // 3 will unmount -> exit hojaye delete kr de,

  // did mount first time use come
  useEffect(() => {
    console.log(name, "checkname value1");
  }, []);

  // did update
  useEffect(() => {
    console.log(name, "checkname value2");
  }, [name, email]);

  //3 will un mount
  useEffect(() => {
    return () => {
      console.log("exit , will unmount3");
    };
  }, []);
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type=" email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          {" "}
          Already have an account <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
