import "./City.css";
import BridgeForeground from "./images/ggb-foreground.svg";
import BridgeBackground from "./images/ggb-background.svg";
import Clouds from "./images/clouds.svg";
import SunMoon from "./images/sunandmoon.svg";
import { useTheme } from "./ThemeManager";

function City() {
  const theme = useTheme();
  const toggleSky = (): string => {
    if (theme.mode === "light") {
      return "city__sky--day";
    } else {
      return "city__sky--night";
    }
  };

  const toggleSunMoon = (): string => {
    if (theme.mode === "light") {
      return "city__sun ";
    } else {
      return "city__moon";
    }
  };

  return (
    <div className="city__container">
      <div className={toggleSky()}></div>
      <img src={SunMoon} alt="" className={toggleSunMoon()} />
      <div className="city__water"></div>

      {/* bridge */}

      <img
        width="100%"
        height="auto"
        src={BridgeForeground}
        alt=""
        className="city__bridge--fg"
      />
      <img
        width="100%"
        height="auto"
        src={BridgeBackground}
        alt=""
        className="city__bridge--bg"
      />

      <img
        width="200%"
        height="auto"
        src={Clouds}
        alt=""
        className="city__clouds"
      />
    </div>
  );
}

export default City;
