import React from "react";

import logo from "../logo.png";
function Header() {
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
        </ul>
      </div>
    </div>
  );
}

export default Header;
