import React from "react";
import "./ResumeButton.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import * as themeConf from "../Theme";
import styled from "styled-components";

const ResumeButtonWrap = styled.button`
  background-color: ${themeConf.linkColor};
  color: ${themeConf.backgroundColor};
  border: none;
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
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://www.dropbox.com/scl/fi/84hi4ig3yhb8u6t7onrwy/JW__Resume-2025.pdf?rlkey=fjnotpbmmmms2lxdz5amvtjtw&st=92o9xbn6&dl=1";
    link.download = "Justin-Weisberg-Resume-2025.pdf";
    link.target = "_blank";
    
    // Try to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback: open in new tab if download doesn't work
    setTimeout(() => {
      window.open("https://www.dropbox.com/scl/fi/84hi4ig3yhb8u6t7onrwy/JW__Resume-2025.pdf?rlkey=fjnotpbmmmms2lxdz5amvtjtw&st=92o9xbn6&dl=1", "_blank");
    }, 1000);
  };

  return (
    <ResumeButtonWrap className="resume-button" onClick={handleDownload}>
      <ArchiveIcon />
      Download Resume
    </ResumeButtonWrap>
  );
}

export default ResumeButton;
