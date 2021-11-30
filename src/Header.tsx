import React from "react";
import "./Header.css";
import logo from "./images/JW-logo.png";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

function Header() {
  return (
    <div className="header__container">
      <img src={logo} className="header__logo" alt="" />
      <h1 className="headerText__top"> Front-end Developer/ Musician</h1>
      <h3 className="headerText__bottom">
        Made with love in San Francisco, CA
      </h3>
      <ToggleOnIcon className="header__toggle" />
    </div>
  );
}

export default Header;
