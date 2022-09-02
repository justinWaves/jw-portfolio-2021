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
            <strong>...and I love to create </strong>
          </span>
          beautiful, performant user interfaces with React + Typescript. In
          2013, after deploying my first consumer-facing website, I fell in love
          with the world of software development, and dove in deep, completing
          courses in CS fundamentals, Ruby, PHP, Javascript, HTML & CSS. Two
          major skills I have developed from being a self-taught programmer, is
          the ability to learn new tech efficiently, and the ability communicate
          the needs of many non-technical clients and ultimately to ship and
          deploy final products they are happy with. Today I am fully focused on
          enterprise-scale web apps and have tailored my skills serve an agile
          dev team. With a strong foundation in Data Structures, algorithms, Big
          O, and other CS principles, I will deliver not just any solution, the
          but the most performant and cost effective solution for any problem,
          saving time, memory and money. Outside of software development, you
          can find me climbing, playing jazz piano, jamming on guitar, or
          producing electronic music under the moniker{" "}
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
