import React, { useState } from "react";
import * as themeConf from "./Theme";
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
      knobSelectHeader = "Sass";
      knobSelectParagraph =
        "I have used Sass in many past projects to utilize mix-ins and variables. Today I prefer to use Styled Components and Styled Themes to handle my styling. ";
    }
    if (knobValue === 20) {
      knobSelectHeader = "CSS3";
      knobSelectParagraph =
        "CSS is one of the first languages I have learned and is one of my strengths. I am crafty with Media Queries for Responsive design, I love Flexbox, and animations";
    }
    if (knobValue === 30) {
      knobSelectHeader = "HTML5";
      knobSelectParagraph =
        "Leanred at the same time as CSS nearly 9 years ago! I completed a course on CodeAcademy.com when they site first launched";
    }
    if (knobValue === 40) {
      knobSelectHeader = "Javascript ES6";
      knobSelectParagraph =
        "My Javascript chop also started from a CodeAcademy.com course and evolved through the help of several books and mentors. I love making use of ES6s new features";
    }
    if (knobValue === 50) {
      knobSelectHeader = "Next.JS";
      knobSelectParagraph =
        "Next.JS is is an Pariatur labore minim aliquip aliquip culpa. Pariatur labore minim aliquip aliquip culpa.";
    }
    if (knobValue === 60) {
      knobSelectHeader = "Tailwind CSS";
      knobSelectParagraph =
        "Next.JS is is an Pariatur labore minim aliquip aliquip culpa. Pariatur labore minim aliquip aliquip culpa.";
    }
    if (knobValue === 70) {
      knobSelectHeader = "Styled Components";
      knobSelectParagraph =
        "Next.JS is is an Pariatur labore minim aliquip aliquip culpa. Pariatur labore minim aliquip aliquip culpa.";
    }
    if (knobValue === 80) {
      knobSelectHeader = "Redux";
      knobSelectParagraph =
        "I learned Redux to store a user state in my Linkedin clone, however since learning about Reacts Context API, I try to avoid Redux because of its extensive boilerplate and complexity";
    }
    if (knobValue === 90) {
      knobSelectHeader = "React";
      knobSelectParagraph =
        "I LOVE React! I create all React apps purely using controlled functional components, however I can work on a Codebase that use Class Components if necessary.  This site was built with Create-React-App + Typescript";
    }
    if (knobValue === 100) {
      knobSelectHeader = "Typescript";
      knobSelectParagraph =
        "Since learning how to implement typescript in my applications, it is a my go-to language for all new projects. This site was implemented in Typescript";
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
        <h5 className="knob__label--7">
          Javascript <br></br> ES6
        </h5>
        <h5 className="knob__label--8">HTML5</h5>
        <h5 className="knob__label--9">CSS3</h5>
        <h5 className="knob__label--10">Sass</h5>
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
