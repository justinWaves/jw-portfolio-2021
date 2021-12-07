import "./Header.css";
import logo from "./images/Weisberglogo.svg";
import logoDark from "./images/JW-logo.png";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Switch from "@mui/material/Switch";
import { useTheme } from "./ThemeManager";

function Header() {
  const theme = useTheme();

  const logoSwitcher = (): string => {
    if (theme.mode === "light") {
      return logo || "";
    } else {
      return logoDark || "";
    }
  };

  return (
    <div className="header__container">
      <img src={logoSwitcher()} className="header__logo" alt="" />
      <h1 className="header__textTop"> Front End Developer</h1>
      <p className="header__subText">San Francisco, CA</p>

      <div className="header__toggle">
        <LightModeOutlinedIcon className="header__sun" sx={{ fontSize: 40 }} />
        <Switch size="medium" onChange={() => theme.toggle()} />

        <DarkModeOutlinedIcon className="header__moon" sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Header;
