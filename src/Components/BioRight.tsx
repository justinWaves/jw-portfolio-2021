import "./BioRight.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import * as themeConf from "../Theme";
import styled from "styled-components";
import useIntersectionObserver from "../Hooks/intersection-observer";
import { useRef, useState } from "react";
import { animated, useSpring, config } from "react-spring";

const ExperienceHeader = styled.h2`
  font-size: 40px;
  font-weight: 300;
  color: ${themeConf.secondaryTextColor};
`;

const ResumeButton = styled.button`
  background-color: ${themeConf.linkColor};
  &:hover {
    background-color: ${themeConf.linkColorHover};
  }
`;

function BioRight() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const Number = () => {
    const [flip, set] = useState(false);
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
        <a
          href="https://www.dropbox.com/s/vrjajfstbvxa608/JWeisberg-Resume-2022.pdf?dl=1"
          title="Justin-Weisberg-Resume2021"
          download
        >
          <ResumeButton className="bio-right__resume-button">
            <ArchiveIcon />
            Download Resume
          </ResumeButton>
        </a>
      </div>
    </>
  );
}

export default BioRight;
