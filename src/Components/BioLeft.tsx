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
  Principal Software Engineer with 11+ years of experience architecting and building production 
  applications. Currently leading complete frontend development for a humanitarian data platform 
  deployed in South Sudan at Weavery.ai, architecting 160+ TypeScript/React components with Next.js 
  14. Previously led API layer development and frontend implementation for appointment platforms 
  serving hundreds of businesses, and building custom CRM systems. Expertise in React, Next.js, 
  TypeScript, and Node.js enables me to deliver scalable, well-architected solutions that solve 
  real business problems. My background in music production and entrepreneurship brings unique 
  perspective to product development and user experience design. When I'm not coding, you'll find 
  me climbing, surfing, composing at the piano, or producing under the moniker{" "}
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
