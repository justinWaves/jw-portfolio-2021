import "./Header.css";
import logo from "./images/Weisberglogo.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Switch from "@mui/material/Switch";
import { useTheme } from "./ThemeManager";

function Header() {
  const theme = useTheme();

  return (
    <div className="header__container">
      <img src={logo} className="header__logo" alt="" />
      <h1 className="header__textTop"> Front End Developer</h1>
      <div className="header__toggle">
        <LightModeOutlinedIcon className="header__sun" sx={{ fontSize: 40 }} />
        <Switch size="medium" onChange={() => theme.toggle()} />

        <DarkModeOutlinedIcon className="header__moon" sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Header;
