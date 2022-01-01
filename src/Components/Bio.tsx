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
    delay: 1000,
    config: config.molasses,
    // onStart: () => set(!flip),
  });

  return (
    <BioContain className="bio">
      <div className="bio__topSection">
        <div className="bio__left">
          <img src={bioPic} alt="" />

          <p>
            <strong> Greetings!</strong> My name is Justin, and I am a Front-end
            Developer from San Francisco on a mission to help build large-scale
            products that change the world. My passion for building things began
            in early childhood, starting with Lincoln Logs and Legos, then to
            Music Production and Flash Cartoons, where I wrote my first line of
            code at the age of 14. I have always been a self-starter, quick to
            pick up new tech. In 2018, I launched a web design firm focused on
            small businesses, and coded my clients sites with pure HTML, CSS,
            Javascript, and Bootstrap, giving me a very strong foundation of web
            dev fundamentals. This path led me wanting more, and made me realize
            I work best in a team setting. So I took on several mentors and
            online classes to learn component-based design, write cleaner more
            scalable code, and added a whole new array of new frameworks and
            libraries to my toolkit, which can be seen on the know below.
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
