import "./BioHeader.css";
import { useRef, useState } from "react";
import useIntersectionObserver from "../Hooks/intersection-observer";
import { animated, useSpring, config } from "react-spring";

function BioHeader() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const headerStyle = useSpring({
    config: config.wobbly,
    from: { opacity: 0, transform: "scaleY(-1)" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? "scaleY(1)" : "scaleY(-1)",
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
