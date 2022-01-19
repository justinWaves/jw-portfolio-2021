import "./City.css";
import Bridge from "./Bridge";
import Clouds from "../images/clouds.svg";
import SunMoon from "../images/SunMoonGlow.svg";
import { useTheme } from "../ThemeManager";
import AirTraffic from "./AirTraffic";

function City() {
  const theme = useTheme();
  const toggleSky = (): string => {
    if (theme.mode === "light") {
      return "city__sky--day";
    } else {
      return "city__sky--night";
    }
  };

  const toggleWater = (): string => {
    if (theme.mode === "light") {
      return "city__water--day";
    } else {
      return "city__water--night";
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

      <AirTraffic />

      <div className={toggleWater()}></div>
      
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
