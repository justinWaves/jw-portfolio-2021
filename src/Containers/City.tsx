import "./City.css";
import Bridge from "../Components/Bridge";
import Clouds from "../images/clouds.svg";
import SunMoon from "../images/SunMoonGlow.svg";
import { useTheme } from "../ThemeManager";
import AirTraffic from "../Components/AirTraffic";
import { animated, useSpring, config } from "react-spring";

function City() {
  const theme = useTheme();
  let isLight: boolean = false;
  if (theme.mode === "light") {
    isLight = true;
  } else {
    isLight = false;
  }

  const headerStyle = useSpring({
    config: config.wobbly,
    from: { transform: "rotate(180deg)" },
    to: {
      transform: isLight ? "rotate(0deg)" : "rotate(180deg)",
    },
  });

  return (
    <div className="city__container">
      <AirTraffic />

      <animated.img
        src={SunMoon}
        alt=""
        className="city__sun-and-moon"
        style={headerStyle}
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
