import bioPic from "../images/jwaves even smaller.jpg";
import "./Bio.css";
import * as themeConf from "../Theme";
import styled from "styled-components";
import ToolsKnob from "./ToolsKnob";
import ArchiveIcon from "@mui/icons-material/Archive";

const BioContain = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
`;

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

function Bio() {
  return (
    <BioContain className="bio">
      <div className="bio__topSection">
        <div className="bio__left">
          <img src={bioPic} alt="" />

          <p>
            <strong className="bio__greetings"> Greetings!</strong> My name is
            Justin, and I am a Front-end Developer from San Francisco on a
            mission to help build large-scale web apps that change the world. I
            taught myself web development fundamentals in 2013 and launched my
            own web design firm 5 years later focused on local small businesses,
            coding all sites from scratch. As a team member, I adhere to the
            motto "forever a student" and am always accepting of feedback and
            critique. I enjoy writing complex logic in Javascript, as well as
            elegant UX, making Front-End work the most rewarding landscape of
            web app development personally. Today I enjoy using React,
            Typescript, Next.JS, Tailwind CSS, and strive daily toward a Senior
            level.
          </p>
        </div>
        <div className="bio__right">
          <ExperienceHeader>Years of Experience:</ExperienceHeader>

          <h1 className="bio__experience">8</h1>

          <a
            href="https://www.dropbox.com/s/vrjajfstbvxa608/JWeisberg-Resume-2022.pdf?dl=1"
            title="Justin-Weisberg-Resume2021"
            download
          >
            <ResumeButton className="bio__resume--button">
              <ArchiveIcon />
              Download Resume
            </ResumeButton>
          </a>
        </div>
      </div>

      <div className="bio__tools">
        <ToolsKnob />
      </div>
    </BioContain>
  );
}

export default Bio;
