import React from "react";
import "./Header.css";
import logo from "./images/Weisberglogo.svg";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';




function Header() {
  return (
    <div className="header__container">
      <div className="header__title--contain">
      <img src={logo} className="header__logo" alt="" />
      <h1 className="header__textTop"> Front End Developer</h1>
      </div>
     <div className="header__toggle">
     <DarkModeOutlinedIcon className="header__moon" sx={{ fontSize: 40 }}/>
      <ToggleOnIcon className="header__toggleSwitch" sx={{ fontSize: 75 }}/>
      <LightModeOutlinedIcon className="header__sun" sx={{ fontSize: 40 }}/>
      </div>
    </div>
  );
}

export default Header;
