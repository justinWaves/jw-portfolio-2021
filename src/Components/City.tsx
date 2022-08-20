import "./City.css";
import Bridge from "./Bridge";
import Clouds from "../images/clouds.svg";
import SunMoon from "../images/SunMoonGlow.svg";
import { useTheme } from "../ThemeManager";
import AirTraffic from "./AirTraffic";

function City() {
  const theme = useTheme();
  let isLight = null;
  if (theme.mode === "light") {
    isLight = true;
  } else {
    isLight = false;
  }

  return (
    <div className="city__container">
      <div className={isLight ? "city__sky--day" : "city__sky--night"}></div>
      <img
        src={SunMoon}
        alt=""
        className={isLight ? "city__sun " : "city__moon"}
      />
      <AirTraffic />
      <div
        className={isLight ? "city__water--day" : "city__water--night"}
      ></div>
      <Bridge />
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
