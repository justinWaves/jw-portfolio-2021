import bioPic from "../images/jwaves even smaller.jpg";
import "./Bio.css";
import * as themeConf from "../Theme";
import { useTheme } from "../ThemeManager";
import styled from "styled-components";
import ToolsKnob from "./ToolsKnob";
import BioRight from "./BioRight";
import BioHeader from "./BioHeader";

const BioContain = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
`;

const BioLink = styled.a`
  color: ${themeConf.linkColor};
  text-decoration: none;
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
          <div className="bio__left">
            <img src={bioPic} alt="" />
            <div className="bio__text-background">
              <p>
                <span style={{ fontSize: 20 }}>
                  {" "}
                  <strong>...and I love to code </strong>
                </span>
                beautiful, performant user interfaces with React + Typescript.
                In 2013, I deployed my first consumer-facing website. 5 years
                later I started a web design firm called{" "}
                <BioLink href="https://www.highlifepages.com/" target="_blank">
                  HighLife Pages
                </BioLink>
                . The most valuable skills I have developed as a self-taught
                programmer, is the ability to stay current and adapt to new tech
                quickly, as well as the ability to self-manage, and take 100%
                ownership over my work. Today I am fully focused on
                enterprise-scale web apps and have tailored my skills to serve
                an agile dev environment. With the help of some senior-level
                mentors, online courses, and real world experience, I have
                learned to write clean, scalable, performant, well-tested,
                production-ready code. When I am not coding, you can find me
                climbing, playing jazz piano, jamming on guitar, or producing
                electronic music under the moniker{" "}
                <BioLink
                  href="https://justinwaves-blog.vercel.app/"
                  target="_blank"
                >
                  Justin Waves
                </BioLink>
                .
              </p>
            </div>
          </div>
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
