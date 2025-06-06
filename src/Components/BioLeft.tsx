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
  Music composer & producer turned software engineer, I bring over a decade of
  creative problem-solving into the world of technology. With deep expertise in
  React, Node.js, and TypeScript, I craft production-grade applications that are
  scalable, well-tested, and thoughtfully architected. My foundation in computer
  science principles is self-taught but battle-tested through real-world shipping
  experience. When I’m not building software, you’ll find me climbing, composing
  at the piano, or producing under the moniker{" "}
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
