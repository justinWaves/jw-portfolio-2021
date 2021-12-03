import React from "react";
import "./City.css";
import BridgeForeground from "./images/ggb-foreground.svg"
import BridgeBackground from "./images/ggb-background.svg"
import Clouds from "./images/ggb-clouds.svg"




function City() {
  return (
    <div className="city__container">
 

<div className="city__sky"></div>
<div className="city__sunAndMoon"></div>
<div className="city__water"></div>


{/* bridge */}
<img width="100%" height="auto" src={BridgeForeground} alt="" className="city__bridge--fg" />
<img width="100%" height="auto" src={BridgeBackground} alt="" className="city__bridge--bg" />


{/* FOR MOBILE */}
{/* <img width="125%" height="auto" src={BridgeForeground} alt="" className="city__bridge--fg" />
<img width="125%" height="auto" src={BridgeBackground} alt="" className="city__bridge--bg" /> */}

<img width="200%" height="auto" src={Clouds} alt="" className="city__clouds" />

      
    </div>
  );
}

export default City;
