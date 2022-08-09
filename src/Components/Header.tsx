import "./Header.css";
import { ReactComponent as Logo } from "../images/jweisberg__textlogo.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Switch from "@mui/material/Switch";
import * as themeConf from "../Theme";
import { useTheme } from "../ThemeManager";
import styled from "styled-components";

function Header() {
  const theme = useTheme();

  const toggleThemeSwitchValue = (): boolean => {
    if (theme.mode === "light") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="header__container">
      <Logo
        className="header__logo"
        fill={toggleThemeSwitchValue() ? "#fff" : "#8A8A8A"}
      />
      <div className="header__text--container">
        <h1 className="header__textTop"> Front End Developer</h1>
        <p className="header__subText">San Francisco, CA</p>
      </div>
      <div className="header__toggle--container">
        <LightModeOutlinedIcon className="header__sun" sx={{ fontSize: 40 }} />
        <Switch
          size="medium"
          onChange={() => theme.toggle()}
          checked={toggleThemeSwitchValue()}
          color="default"
        />

        <DarkModeOutlinedIcon className="header__moon" sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Header;
