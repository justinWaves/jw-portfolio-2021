import React from "react";
import bioPic from "./images/jwaves even smaller.jpg";
import "./Bio.css";

function Bio() {
  return (
    <div className="bio">
      <div className="bio__left">
        <img src={bioPic} alt="" />

        <p>
          <strong>Hello,</strong> my name is Justin Weisberg. I am a Self-taught
          Front-end Developer, designer, and music producer from San Francisco,
          CA. After years of freelancing, I have reached a point where I want to
          work in a group setting, and help build large-scale products that help
          change the world. I'm passionate about componet-based deisgn, writing
          clean scalable code, and learning new frameworks and libraries.
          Currently, I have been building with React, Redux, Typescript, and
          Tailwind CSS.
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
