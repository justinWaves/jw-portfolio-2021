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
        "Primary development environment with custom configurations for React/TypeScript development. Leverages extensions for code formatting, linting, and intelligent code completion to maintain high code quality and development velocity.";
    }
    if (knobValue === 10) {
      knobSelectHeader = "Node.js";
      knobSelectParagraph =
        "Server-side JavaScript runtime for building scalable backend applications. Developed REST APIs, middleware, and server-side logic using Express and Fastify. Experience with performance optimization and production deployment strategies.";
    }
    if (knobValue === 20) {
      knobSelectHeader = "Docker";
      knobSelectParagraph =
        "Containerization platform for consistent development and deployment environments. Built and maintained Docker containers for production applications. Experience with container orchestration and deployment pipelines for scalable infrastructure.";
    }
    if (knobValue === 30) {
      knobSelectHeader = "GraphQL";
      knobSelectParagraph =
        "Modern API query language and runtime for building data-driven applications. Implemented TypeGraphQL schemas with Prisma integration for type-safe APIs. Experience with Apollo Client and server-side GraphQL implementations.";
    }
    if (knobValue === 40) {
      knobSelectHeader = "PostgreSQL";
      knobSelectParagraph =
        "Advanced relational database management system for production applications. Designed and implemented complex database schemas, optimized queries, and managed data migrations. Experience with advanced PostgreSQL features including JSON support, full-text search, and performance tuning for scalable applications.";
    }
    if (knobValue === 50) {
      knobSelectHeader = "Testing";
      knobSelectParagraph =
        "Comprehensive testing strategy using React Testing Library for component testing and Cypress for end-to-end testing. Implemented automated testing pipelines and CI/CD integration to ensure code quality and prevent regressions.";
    }
    if (knobValue === 60) {
      knobSelectHeader = "Tailwind CSS";
      knobSelectParagraph =
        "Utility-first CSS framework for rapid UI development. Implemented custom design systems and component libraries while maintaining consistent design patterns. Optimized for performance and developer experience in team environments.";
    }
    if (knobValue === 70) {
      knobSelectHeader = "Prisma ORM";
      knobSelectParagraph =
        "Modern database toolkit for TypeScript and Node.js. Designed and implemented database schemas, migrations, and complex queries for production applications. Experience with PostgreSQL integration and advanced Prisma features for scalable data management.";
    }
    if (knobValue === 80) {
      knobSelectHeader = "Next.js";
      knobSelectParagraph =
        "Full-stack React framework for production applications. Leveraged server-side rendering, static site generation, and API routes to build performant, SEO-optimized applications. Experience with advanced features like incremental static regeneration and dynamic imports.";
    }
    if (knobValue === 90) {
      knobSelectHeader = "React";
      knobSelectParagraph =
        "Advanced React development with expertise in hooks, context, performance optimization, and modern patterns. Built scalable component libraries and implemented complex user interfaces. Strong understanding of React's virtual DOM and rendering optimization.";
    }
    if (knobValue === 100) {
      knobSelectHeader = "TypeScript";
      knobSelectParagraph =
        "Strongly-typed JavaScript for robust, maintainable codebases. Implemented comprehensive type systems and interfaces for complex applications. Experience with advanced TypeScript features including generics, utility types, and strict type checking.";
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
        <h5 className="knob__label--0">VS Code</h5>
        <h5 className="knob__label--1">TypeScript</h5>
        <h5 className="knob__label--2">React</h5>
        <h5 className="knob__label--3">Next.js</h5>
        <h5 className="knob__label--4">
          Prisma <br></br>ORM
        </h5>
        <h5 className="knob__label--5">
          Tailwind<br></br> CSS
        </h5>
        <h5 className="knob__label--6">Testing</h5>
        <h5 className="knob__label--7">
          PostgreSQL
        </h5>
        <h5 className="knob__label--8"> GraphQL</h5>
        <h5 className="knob__label--9">Docker</h5>
        <h5 className="knob__label--10">
          Node.js
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
