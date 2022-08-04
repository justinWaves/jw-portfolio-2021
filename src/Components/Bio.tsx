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

const BioLink = styled.a`
  color: ${themeConf.linkColor};
  text-decoration: none;
`;

function Bio() {
  return (
    <BioContain className="bio">
      <div className="bio__topSection">
        <div className="bio__left">
          <img src={bioPic} alt="" />

          <p>
            <strong className="bio__greetings"> Greetings!</strong> My name is
            Justin, and I am a Web Developer from San Francisco with a strong
            passion for impeccable UX and keen eye for design. When Im not
            coding, I am creating music under the moniker{" "}
            <BioLink
              href="https://distrokid.com/hyperfollow/justinwaves/sun-will-rise-3"
              target="_blank"
            >
              Justin Waves
            </BioLink>{" "}
            which has led to many performances around the Bay Area, including
            Outside Lands 2019. I taught myself web development fundamentals in
            2013 and launched my own web design firm 5 years later focused on
            local small businesses, coding all sites from scratch. Though my
            talent is best suited for front end work, I have built several full
            stack web apps some of which can be found below. Learning new tech
            and expanding my toolbox is a true passion of mine. Today I enjoy
            using React, Typescript, Next.JS, TailwindCSS, and I am actively
            seeking a role on a agile dev team. Let's build!
          </p>
        </div>
        <div className="bio__right">
          <ExperienceHeader>Years Coding:</ExperienceHeader>

          <h1 className="bio__experience">9</h1>

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
