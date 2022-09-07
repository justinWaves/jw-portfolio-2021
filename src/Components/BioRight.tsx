import "./BioRight.css";
import * as themeConf from "../Theme";
import styled from "styled-components";
import useIntersectionObserver from "../Hooks/intersection-observer";
import { useRef, useState } from "react";
import { animated, useSpring, config } from "react-spring";
import ResumeButton from "./ResumeButton";

const ExperienceHeader = styled.h2`
  font-size: 40px;
  font-weight: 300;
  color: ${themeConf.secondaryTextColor};
`;

function BioRight() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const Number = () => {
    const [flip] = useState(false);
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: 9,
      delay: 200,
      config: config.molasses,
    });

    const numberFade = useSpring({
      config: config.molasses,
      from: { opacity: 0 },
      to: {
        opacity: dataRef?.isIntersecting ? 1 : 0,
      },
    });

    return (
      <animated.div style={numberFade} className="bio-right__experience">
        {dataRef?.isIntersecting ? number.to((n) => n.toFixed(1)) : 0}
      </animated.div>
    );
  };

  return (
    <>
      <div className="bio-right">
        <ExperienceHeader>Years of Experience</ExperienceHeader>

        <>{Number()}</>
        <div ref={triggerRef} />

        <ResumeButton />
      </div>
    </>
  );
}

export default BioRight;
