import React, { useState, useEffect, useRef } from 'react'
import PortfolioItem from "./PortfolioItem";
import "./Projects.css";
import linkedinCloneThumbnail from "./images/linkedin-clone-screenshot.png"



function Projects() {
 
  return (
    <div className="projects">
      <h1 className="projects__title">Recent Projects</h1>
      <div className="projects__contain">
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          imageSrc={linkedinCloneThumbnail}
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="Tic React Toe"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          imageSrc=" "
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="HighLife Pages"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          imageSrc=" "
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          imageSrc=" "
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          imageSrc=" "
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          imageSrc=" "
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
      </div>
    </div>
  );
}

export default Projects;
