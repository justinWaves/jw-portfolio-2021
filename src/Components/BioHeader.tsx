import "./BioHeader.css";
import { useRef } from "react";
import useIntersectionObserver from "../Hooks/intersection-observer";
import { animated, useSpring, config } from "react-spring";

function BioHeader() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });

  const headerStyle = useSpring({
    config: config.wobbly,
    from: { opacity: 0, transform: "skew(0deg, 0deg)" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting
        ? "skew(0deg, 0deg)"
        : "skew(-30deg, 20deg)",
    },
  });
  return (
    <>
      <animated.h1 style={headerStyle} className="bioHeader__text">
        <strong> Hello!</strong> My name is Justin,
      </animated.h1>
      <div ref={triggerRef} />
    </>
  );
}

export default BioHeader;
