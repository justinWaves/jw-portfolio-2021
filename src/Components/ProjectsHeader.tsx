import "./ProjectsHeader.css";
import { useRef } from "react";
import useIntersectionObserver from "../Hooks/intersection-observer";
import { animated, useSpring, config } from "react-spring";

function ProjectsHeader() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const projectHeaderAnimation = useSpring({
    config: config.wobbly,
    from: { opacity: 0, transform: "skew(0deg, 0deg)" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting
        ? "skew(0deg, 0deg)"
        : "skew(-50deg, 0deg)",
    },
  });

  return (
    <>
      <animated.h1
        style={projectHeaderAnimation}
        className="projectsHeader__title"
      >
        <strong>Recent</strong> Projects
      </animated.h1>
      <div ref={triggerRef} />
    </>
  );
}

export default ProjectsHeader;
