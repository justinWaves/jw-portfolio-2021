import { useState } from "react";
import bioPic from "./images/jwaves even smaller.jpg";
import "./Bio.css";
import * as themeConf from "./Theme";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import ToolsKnob from "./ToolsKnob";

const BioContain = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  z-index: 1;
  @media only screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }
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
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  });

  return (
    <BioContain>
      <div className="bio__topSection">
        <div className="bio__left">
          <img src={bioPic} alt="" />

          <p>
            <strong> Hello,</strong> my name is Justin Weisberg. I am a
            Front-end Developer from San Francisco on a mission to help build
            large-scale products that change the world. I'm passionate about
            componet-based deisgn, writing clean scalable code, and learning new
            frameworks and libraries. Currently, my tools of choice are React,
            Redux, Typescript.
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
