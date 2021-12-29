import "./Bridge.css";
import Traffic from "./Traffic";
import BridgeForeground from "../images/ggb-foreground.svg";
import BridgeBackground from "../images/ggb-background.svg";

function Bridge() {
  return (
    <div className="bridge">
      <img
        // width="100%"
        // height="auto"
        src={BridgeForeground}
        alt=""
        className="bridge__fg"
      />
      <Traffic />
      <img
        // width="100%"
        // height="auto"
        src={BridgeBackground}
        alt=""
        className="bridge__bg"
      />
    </div>
  );
}

export default Bridge;
