import { useState } from "react";
import bioPic from "../images/jwaves even smaller.jpg";
import "./Bio.css";
import * as themeConf from "../Theme";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import ToolsKnob from "./ToolsKnob";

const BioContain = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
`;

const ExpirenceHeader = styled.h2`
  font-size: 40px;
  font-weight: 300;
  color: ${themeConf.secondaryTextColor};
`;

function Bio() {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 8,
    delay: 500,
    config: config.molasses,
    // onStart: () => set(!flip),
  });

  return (
    <BioContain className="bio">
      <div className="bio__topSection">
        <div className="bio__left">
          <img src={bioPic} alt="" />

          <p>
            <strong> Hello,</strong> my name is Justin Weisberg. I am a
            Front-end Developer from San Francisco on a mission to help build
            large-scale products that change the world. I'm passionate about
            component-based design, writing clean scalable code, and learning
            new frameworks and libraries. My current dev tools can be found on
            the knob below.
          </p>
        </div>
        <div className="bio__right">
          <ExpirenceHeader>Years of Expirence:</ExpirenceHeader>
          <animated.h1 className="bio__expirence">
            {number.to((n) => n.toFixed(1))}
          </animated.h1>
        </div>
      </div>

      <div className="bio__tools">
        <ToolsKnob />
      </div>
    </BioContain>
  );
}

export default Bio;
