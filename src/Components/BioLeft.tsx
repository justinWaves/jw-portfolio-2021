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
  Full-stack software engineer with 10+ years of experience building production applications. 
  Led backend development for appointment platforms serving hundreds of businesses and built 
  custom CRM systems that streamline operations. Expertise in React, Node.js, and TypeScript 
  enables me to deliver scalable, well-architected solutions that solve real business problems. 
  My background in music production and entrepreneurship brings unique perspective to product 
  development and user experience design. When I'm not coding, you'll find me climbing, surfing,
  composing at the piano, or producing under the moniker{" "}
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
