import React from "react";
import { useState } from "react";
import logo from "../logo.png";

const loggedInUser = () => {
  return true;
};

function Header() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" />
      </div>
      <div className="navitems">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          {isLoggedIn ? (
            <button onClick={() => setisLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setisLoggedIn(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
