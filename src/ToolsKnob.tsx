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
      knobSelectHeader = "Javascript ES6";
      knobSelectParagraph =
        "Javascript is my favorite programming language and the heart of my entire Frontend Stack. I started with JS with a CodeAcademy.com course 8 years ago and evolved through the help of several books and mentors. I love making use of ES6s new features ";
    }
    if (knobValue === 20) {
      knobSelectHeader = "CSS3";
      knobSelectParagraph =
        "CSS is one of the first languages I have learned and is one of my strengths. I am crafty with Media Queries for Responsive design, I love Flexbox, and animations";
    }
    if (knobValue === 30) {
      knobSelectHeader = "HTML5";
      knobSelectParagraph =
        "Learned at the same time as CSS nearly 9 years ago from CodeAcademy. Now that I use React and the Virtual DOM I rarely touch my HTML files";
    }
    if (knobValue === 40) {
      knobSelectHeader = "Sass";
      knobSelectParagraph =
        "I have used Sass in many past projects to utilize mix-ins and variables. I have been moving away from Sass since I using Tailwind and Styled Components.";
    }
    if (knobValue === 50) {
      knobSelectHeader = "Next.JS";
      knobSelectParagraph =
        "The Next.JS library for React offers some amazing new features I very excited about such as Image optimization, and Environment variables.";
    }
    if (knobValue === 60) {
      knobSelectHeader = "Tailwind CSS";
      knobSelectParagraph =
        "I love the workflow and performance with Tailwind CSS. Keeps for a tidy file structure. Great for large team-based projects. Go-to for Mobile-First Design ";
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
        "Since learning React I can not go back. Component-based design is so efficient and scalable. I create all React apps purely using functional components, however I can work on a Codebase that use Class Components if necessary.  This site was built with Create-React-App + Typescript";
    }
    if (knobValue === 100) {
      knobSelectHeader = "Typescript";
      knobSelectParagraph =
        "Any project worked on by a large team or that handles lots of inputted data from the user should implement Typescript. I am a large fan of using Typescript with React. This site was implemented in Typescript";
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
