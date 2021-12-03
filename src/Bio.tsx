import React from "react";
import bioPic from "./images/jwaves even smaller.jpg";
import "./Bio.css";

function Bio() {
  return (
    <div className="bio">
      <div className="bio__left">
        <img src={bioPic} alt="" />

        <p>
          <strong> Hello,</strong> my name is Justin Weisberg. I am a
         Front-end Developer from San Francisco on a mission to
       help build large-scale products that
          change the world. I'm passionate about componet-based deisgn, writing
          clean scalable code, and learning new frameworks and libraries.
          Currently, my tools of choice are React, Redux, Typescript.
        </p>
      </div>
      <div className="bio__right">
        <h2>Years of Expirence:</h2>
        <h1 className="bio__expirence">8</h1>
      </div>
    </div>
  );
}

export default Bio;
