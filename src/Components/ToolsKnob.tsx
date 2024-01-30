import React, { useState } from "react";
import * as themeConf from "../Theme";
import "./ToolsKnob.css";
import { Basic } from "react-dial-knob";
import styled from "styled-components";

const ToolsDescription = styled.div`
  border-color: ${themeConf.linkColor};
  border-width: 3px;
`;

function ToolsKnob() {
  const [knobValue, setKnobValue] = useState(0);

  let knobSelectHeader = "";
  let knobSelectParagraph = "";

  const setDescriptionDataAtKnobPosition = () => {
    if (knobValue === 0) {
      knobSelectHeader = "VS Code";
      knobSelectParagraph =
        "VS Code is my IDE of choice. Extensions such as Emmet, Prettier, and IntelliSense keep my code beautiful, my workflow fast, and makes use of machine learning to automate monotonous processes";
    }
    if (knobValue === 10) {
      knobSelectHeader = "Javascript ES6";
      knobSelectParagraph =
        "Since completing CodeAcademy's Javascript online course in 2013, JS has become my primary programming language and the core of nearly every stack I have worked with. From creating graphic user interfaces for web apps, to implementing data structures, JS is my #1.";
    }
    if (knobValue === 20) {
      knobSelectHeader = "CSS3 / HTML5";
      knobSelectParagraph =
        "I began to learn basic HTML and CSS when I was in highschool (circa 2004) to customize my Xanga blog. After completing CodeAcademy's a web-fundamentals course in 2013, I began creating websites for local businesses, picking up jQuery, Bootstrap, PHP and Javascript along the way.";
    }
    if (knobValue === 30) {
      knobSelectHeader = "React Spring";
      knobSelectParagraph =
        "This is one of the coolest animation libraries I have come across. The physics-based possibilities seem to be endless, and I experience far better cross-browser support for js-based animations than pure CSS ones.";
    }
    if (knobValue === 40) {
      knobSelectHeader = "Cypress/  Testing Library";
      knobSelectParagraph =
        "For implementing unit/ integration tests I have been using React's Testing Library, and Cypress for e2e tests.";
    }
    if (knobValue === 50) {
      knobSelectHeader = "Next.JS";
      knobSelectParagraph =
        "The Next.JS library for React has become a go-to for all my latest projects. Utilizing Image optimization, Server Side Rendering, Dynamic routes, Incremental Static Regeneration, and deployment to vercel makes for lighting fast UX and better SEO.";
    }
    if (knobValue === 60) {
      knobSelectHeader = "Tailwind CSS";
      knobSelectParagraph =
        "I love the workflow and performance of Tailwind CSS. Keeps for a tidy file structure. Great for large team-based projects. Go-to for Mobile-First Design.";
    }
    if (knobValue === 70) {
      knobSelectHeader = "Styled Components";
      knobSelectParagraph =
        "I love using Styled Components/ Styled-themes. It is how I created the dark/light mode on this website. Whats best about this approach is it easily allows for as many themes as you want. ";
    }
    if (knobValue === 80) {
      knobSelectHeader = "Redux";
      knobSelectParagraph =
        "My global state manager of choice is Redux. In this portfolio site, redux was overkill for managing the global theme state, so I used React Context API instead. This logic can be found in a directory called 'ThemeManager' located in the repo for this project.";
    }
    if (knobValue === 90) {
      knobSelectHeader = "React";
      knobSelectParagraph =
        "Expert at traversing the virtual DOM. Mainly due its performance and popularity, React has becoming my primary framework for developing user interfaces. The amount of awesome libraries created around the framework is also a huge benefit.";
    }
    if (knobValue === 100) {
      knobSelectHeader = "Typescript";
      knobSelectParagraph =
        "Having a strongly-typed codebase makes for much more robust and secure code. Learning Typescript also helped me understand other strongly-typed languages. I don't build projects with out it";
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
          Cypress/ <br /> Testing Library
        </h5>
        <h5 className="knob__label--8"> React Spring</h5>
        <h5 className="knob__label--9">CSS / HTML</h5>
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
