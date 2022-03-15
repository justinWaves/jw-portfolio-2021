import "./City.css";
import Bridge from "./Bridge";
import Clouds from "../images/clouds.svg";
import SunMoon from "../images/SunMoonGlow.svg";
import { useTheme } from "../ThemeManager";
import AirTraffic from "./AirTraffic";

function City() {
  const theme = useTheme();
  const changeSkyColorOnThemeToggle = (): string => {
    if (theme.mode === "light") {
      return "city__sky--day";
    } else {
      return "city__sky--night";
    }
  };

  const changeWaterColorOnThemeToggle = (): string => {
    if (theme.mode === "light") {
      return "city__water--day";
    } else {
      return "city__water--night";
    }
  };

  const changeSunAndMoonOnThemeToggle = (): string => {
    if (theme.mode === "light") {
      return "city__sun ";
    } else {
      return "city__moon";
    }
  };

  return (
    <div className="city__container">
      <div className={changeSkyColorOnThemeToggle()}></div>
      <img src={SunMoon} alt="" className={changeSunAndMoonOnThemeToggle()} />

      <AirTraffic />

      <div className={changeWaterColorOnThemeToggle()}></div>

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
