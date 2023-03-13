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
          <span style={{ fontSize: 20 }}> </span>
          Musician turned software engineer, I have been transforming ideas into
          high-performance web applications for the past 10 years. With a strong
          foundation in Data Structures, algorithms, Big O, and expertise with
          React, Node.js, Next.JS, and Typescript, I ship well tested,
          production ready code optimized for performance and scalability.
          Outside of software development, you can find me climbing, playing
          piano, jamming on guitar, or producing music under the name{" "}
          <BioLink href="https://justinwaves-blog.vercel.app/" target="_blank">
            Justin Waves 🌊
          </BioLink>
          .
        </p>
      </div>
    </div>
  );
}

export default BioLeft;
