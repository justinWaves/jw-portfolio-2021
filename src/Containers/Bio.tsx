import "./Bio.css";
import * as themeConf from "../Theme";
import { useTheme } from "../ThemeManager";
import styled from "styled-components";
import ToolsKnob from "../Components/ToolsKnob";
import BioLeft from "../Components/BioLeft";
import BioRight from "../Components/BioRight";
import BioHeader from "../Components/BioHeader";

const BioContain = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
`;

function Bio() {
  const theme = useTheme();
  let isLight = null;
  if (theme.mode === "light") {
    isLight = true;
  } else {
    isLight = false;
  }
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bio__underwater-divider"
      >
        <path
          fill={isLight ? "#3470A6" : "#1A3B63"}
          fill-opacity="1"
          d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <BioContain className="bio">
        <BioHeader />
        <div className="bio__topSection">
          <BioLeft />
          <BioRight />
        </div>

        <div className="bio__tools">
          <ToolsKnob />
        </div>
      </BioContain>
    </>
  );
}

export default Bio;
