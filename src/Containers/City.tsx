import "./City.css";
import Bridge from "../Components/Bridge";
import Clouds from "../images/clouds.svg";
import SunMoon from "../images/SunMoonGlow.svg";
import { useTheme } from "../ThemeManager";
import AirTraffic from "../Components/AirTraffic";

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
      <AirTraffic />

      <img
        src={SunMoon}
        alt=""
        className={isLight ? "city__sun " : "city__moon"}
      />
      <Bridge />
      <div
        className={isLight ? "city__water--day" : "city__water--night"}
      ></div>

      <img
        width="200%"
        height="auto"
        src={Clouds}
        alt=""
        className="city__clouds"
      />
      <div className={isLight ? "city__sky--day" : "city__sky--night"}></div>
    </div>
  );
}

export default City;
