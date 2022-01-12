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
            Developer from San Francisco on a mission to help build projects
            that change the world. As a self-starter quick to pick up new tech,
            I taught myself web development fundamentals in 2013 and have
            freelanced my way to a high level of skill. In 2018, I launched a
            web design firm focused on small businesses, and coded my clients
            sites with pure HTML, CSS, Javascript, and Bootstrap. I enjoy
            solving problems with complex Logic, but have found Front End the
            most enjoyable landscape of web app development as its the perfect
            medium between dev and design. Today I enjoy using React,
            Typescript, Next.JS, Tailwind CSS, and strive daily toward a Senior
            level of ability.
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
