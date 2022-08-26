import "./BioLeft.css";
import bioPic from "../images/jwaves even smaller.jpg";
import styled from "styled-components";
import * as themeConf from "../Theme";

const BioLink = styled.a`
  color: ${themeConf.linkColor};
  text-decoration: none;
`;

function BioLeft() {
  return (
    <div className="bioLeft">
      <img src={bioPic} alt="" />
      <div className="bioLeft__text--contain">
        <p>
          <span style={{ fontSize: 20 }}>
            {" "}
            <strong>...and I love to code </strong>
          </span>
          beautiful, performant user interfaces with React + Typescript. In
          2013, I deployed my first consumer-facing website. 5 years later I
          started a web design firm called{" "}
          <BioLink href="https://www.highlifepages.com/" target="_blank">
            HighLife Pages
          </BioLink>
          . The most valuable skills I have developed as a self-taught
          programmer, is the ability to stay current and adapt to new tech
          quickly, as well as the ability to self-manage, and take 100%
          ownership over my work. Today I am fully focused on enterprise-scale
          web apps and have tailored my skills to serve an agile dev
          environment. With the help of some senior-level mentors, online
          courses, and real world experience, I have learned to write clean,
          scalable, performant, well-tested, production-ready code. When I am
          not coding, you can find me climbing, playing jazz piano, jamming on
          guitar, or producing electronic music under the moniker{" "}
          <BioLink href="https://justinwaves-blog.vercel.app/" target="_blank">
            Justin Waves
          </BioLink>
          .
        </p>
      </div>
    </div>
  );
}

export default BioLeft;
