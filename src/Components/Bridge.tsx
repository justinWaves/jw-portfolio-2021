import "./Bridge.css";
import Traffic from "./Traffic";
import BridgeForeground from "../images/ggb-foreground.svg";
import BridgeBackground from "../images/ggb-background.svg";

function Bridge() {
  return (
    <div className="bridge">
      <img src={BridgeForeground} alt="" className="bridge__fg" />
      <Traffic />
      <img src={BridgeBackground} alt="" className="bridge__bg" />
    </div>
  );
}

export default Bridge;
