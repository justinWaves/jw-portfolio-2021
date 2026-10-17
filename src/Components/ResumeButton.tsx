import React from "react";
import "./ResumeButton.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import * as themeConf from "../Theme";
import styled from "styled-components";

const ResumeButtonWrap = styled.a`
  background-color: ${themeConf.linkColor};
  color: ${themeConf.backgroundColor};
  border: none;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${themeConf.linkColorHover};
  }
`;

function ResumeButton() {
  return (
    <ResumeButtonWrap
      className="resume-button"
      href="https://www.dropbox.com/scl/fi/x7q15zrgviezqcx06vo9q/Justin_Weisberg_Resume_Design_Engineer_Updated.pdf?rlkey=t0lwqbdjrc1brc76mn0qo2gtt&dl=1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArchiveIcon />
      Download Resume
    </ResumeButtonWrap>
  );
}

export default ResumeButton;
