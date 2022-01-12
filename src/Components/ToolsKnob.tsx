import React, { useState } from "react";
import * as themeConf from "../Theme";
import "./ToolsKnob.css";
import { Basic } from "react-dial-knob";
import styled from "styled-components";

const ToolsDescription = styled.div`
  border-color: ${themeConf.linkColor};
`;

function ToolsKnob() {
  const [knobValue, setKnobValue] = useState(0);

  let knobSelectHeader = "";
  let knobSelectParagraph = "";

  const setDescriptionDataAtKnobPosition = () => {
    if (knobValue === 0) {
      knobSelectHeader = "VS Code";
      knobSelectParagraph =
        "I write all my applications with this text editor. Extensions such as Emmet, Prettier, and IntelliSense keep my code beautiful, my workflow fast, and makes use of machine learning to automate monotonous processes ";
    }
    if (knobValue === 10) {
      knobSelectHeader = "Javascript ES6";
      knobSelectParagraph =
        "Javascript is my favorite programming language and the heart of my entire Frontend Stack. As a Front-end focused dev, I have a deep understanding of State and Lifecycle in React, event handling, asynchronous code, fetching and storing data from a DB (relational or non relational) and will deliver well performing UI components";
    }
    if (knobValue === 20) {
      knobSelectHeader = "CSS3";
      knobSelectParagraph =
        "CSS is one of the first languages I have learned and is one of my strengths. I am crafty with Media Queries for Responsive design, I love Flexbox, and animations";
    }
    if (knobValue === 30) {
      knobSelectHeader = "HTML5";
      knobSelectParagraph =
        "Learned at the same time as CSS in 2014 from CodeAcademy, as well as a strong understanding of the DOM. Today I mainly write JSX in React";
    }
    if (knobValue === 40) {
      knobSelectHeader = "Sass";
      knobSelectParagraph =
        "I have used Sass in many past projects to utilize mix-ins and variables. Now that I use Tailwind and Styled Components, I haven't used it in awhile but it is in the toolbag.";
    }
    if (knobValue === 50) {
      knobSelectHeader = "Next.JS";
      knobSelectParagraph =
        "The Next.JS library for React offers some amazing new features I very excited about such as Image optimization, and Environment variables.";
    }
    if (knobValue === 60) {
      knobSelectHeader = "Tailwind CSS";
      knobSelectParagraph =
        "I love the workflow and performance of Tailwind CSS. Keeps for a tidy file structure. Great for large team-based projects. Go-to for Mobile-First Design ";
    }
    if (knobValue === 70) {
      knobSelectHeader = "Styled Components";
      knobSelectParagraph =
        "I love using Styled Components/ Styled-themes. It is how I created the dark/light mode on this website. Whats best about this approach is it easily allows for as many themes as you want. ";
    }
    if (knobValue === 80) {
      knobSelectHeader = "Redux";
      knobSelectParagraph =
        "I try to avoid Redux because of its extensive boilerplate, and use Reacts Context API instead. However many situations I can see its effectiveness, see my LinkedIn Clone for an example of this";
    }
    if (knobValue === 90) {
      knobSelectHeader = "React";
      knobSelectParagraph =
        "Since learning React I can not go back. Component-based design is so efficient and scalable. I create all React apps purely using functional components, however I can work on a Codebase that use Class Components as well.";
    }
    if (knobValue === 100) {
      knobSelectHeader = "Typescript";
      knobSelectParagraph =
        "Having a perfectly-typed solution makes for much more robust and secure code. This site was implemented in Typescript";
    }
  };

  setDescriptionDataAtKnobPosition();

  return (
    <div className="toolsKnob">
      <ToolsDescription className="tools__description--container">
        <h2>{knobSelectHeader}</h2>
        <p className="tools__description--text">{knobSelectParagraph}</p>
      </ToolsDescription>

      <div className="knob__container">
        <h5 className="knob__label--0">VS-Code</h5>
        <h5 className="knob__label--1">Typescript</h5>
        <h5 className="knob__label--2">React</h5>
        <h5 className="knob__label--3">Redux</h5>
        <h5 className="knob__label--4">
          Styled <br></br>Components
        </h5>
        <h5 className="knob__label--5">
          Tailwind<br></br> CSS
        </h5>
        <h5 className="knob__label--6">Next.js</h5>
        <h5 className="knob__label--7">Sass</h5>
        <h5 className="knob__label--8">HTML5</h5>
        <h5 className="knob__label--9">CSS3</h5>
        <h5 className="knob__label--10">
          Javascript <br></br> ES6
        </h5>
        <Basic
          diameter={200}
          min={0}
          max={100}
          step={10}
          value={knobValue}
          theme={{
            defaultColor: "#000",
            activeColor: "#C8FFF4",
            gradientStart: "#121212",
            gradientEnd: "#121212",
            notchAndText: "#DDD",
          }}
          onValueChange={setKnobValue}
          ariaLabelledBy={"my-label"}
        ></Basic>
      </div>
    </div>
  );
}

export default ToolsKnob;
