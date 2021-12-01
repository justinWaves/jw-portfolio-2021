import React from "react";
import "./Header.css";
import logo from "./images/JW-logo.png";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";



function Header() {
  return (
    <div className="header__container">
      <img src={logo} className="header__logo" alt="" />
      <h1 className="header__textTop"> Front-end Developer/ Musician</h1>
      <p className="header__textBottom">
        Made with love in San Francisco, CA
      </p>
      <ToggleOnIcon className="header__toggle" sx={{ fontSize: 50 }}/>
    </div>
  );
}

export default Header;
