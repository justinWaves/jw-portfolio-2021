import "./ResumeButton.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import * as themeConf from "../Theme";
import styled from "styled-components";

const ResumeButtonWrap = styled.button`
  background-color: ${themeConf.linkColor};
  &:hover {
    background-color: ${themeConf.linkColorHover};
  }
`;

function ResumeButton() {
  return (
    <a
      href="https://www.dropbox.com/s/u9kvlouixm5ak4y/Justin%20Weisberg%20Resume%202022.pdf?dl=1"
      title="Justin-Weisberg-Resume2021"
      download
    >
      <ResumeButtonWrap className="resume-button">
        <ArchiveIcon />
        Download Resume
      </ResumeButtonWrap>
    </a>
  );
}

export default ResumeButton;
