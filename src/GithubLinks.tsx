import React, { useMemo } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./GithubLinks.css";
import * as themeConf from "./Theme";
import styled from "styled-components";
import { animated } from "react-spring";
import useBoop from "./Hooks/use-boop";

interface GitHubPropTypes {
  codeUrl: string;
  linkUrl: string;
}

function GithubLinks({ codeUrl, linkUrl }: GitHubPropTypes) {
  const GitHubLink = styled.button`
    background-color: ${themeConf.linkColor};
    color: white;
  `;

  const [style, trigger] = useBoop({ rotation: 360, scale: 1.5 });

  const showLinkButtons = (): boolean => {
    return false;
  };

  // const clickEventHandler = () => {
  //   trigger;

  // };

  return (
    <div className="github__container">
      <GitHubLink onClick={trigger}>
        <animated.span style={style}>
          <GitHubIcon className="gh__icon" sx={{ fontSize: 40 }} />
        </animated.span>
        View Code
      </GitHubLink>

      <div
        className=""
        style={{
          display: showLinkButtons()
            ? ("block" as "block")
            : ("none" as "none" | "none"),
        }}
      >
        <button className="gh__button--site"></button>
        <button className="gh__button--code"></button>
      </div>
    </div>
  );
}

export default GithubLinks;
