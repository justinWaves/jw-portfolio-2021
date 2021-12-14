import React, { MouseEvent } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./GithubLinks.css";
import * as themeConf from "./Theme";
import styled from "styled-components";
import { animated } from "react-spring";

interface GitHubPropTypes {
  onChildClick: (event: MouseEvent) => void;
  style: { rotation: number; scale: number };
  buttonText: string;
}

function GithubLinks({ onChildClick, style, buttonText }: GitHubPropTypes) {
  const GitHubLink = styled.button`
    background-color: ${themeConf.linkColor};
    color: white;
  `;

  const expandButtonContainer = (event: MouseEvent) => {
    onChildClick(event);
  };

  return (
    <div className="github__container">
      <GitHubLink onClick={expandButtonContainer}>
        <animated.span style={style}>
          <GitHubIcon className="gh__icon" sx={{ fontSize: 40 }} />
        </animated.span>
        {buttonText}
      </GitHubLink>
    </div>
  );
}

export default GithubLinks;
