import "./Header.css";
import { ReactComponent as Logo } from "../images/jweisberg__textlogo.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Switch from "@mui/material/Switch";
import { useTheme } from "../ThemeManager";

function Header() {
  const theme = useTheme();
  let isLight = true;
  if (theme.mode === "light") {
    isLight = !isLight;
  }

  return (
    <div className="header__container">
      <Logo className="header__logo" fill={isLight ? "#fff" : "#8A8A8A"} />
      <div className="header__text--container">
        <h1 className="header__textTop"> Software Developer</h1>
        <p className="header__subText">San Francisco, CA</p>
      </div>
      <div className="header__toggle--container">
        <LightModeOutlinedIcon className="header__sun" sx={{ fontSize: 40 }} />
        <Switch
          size="medium"
          onChange={() => theme.toggle()}
          checked={isLight}
          color="default"
        />

        <DarkModeOutlinedIcon className="header__moon" sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Header;
