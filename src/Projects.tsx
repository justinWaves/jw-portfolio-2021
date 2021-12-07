import PortfolioItem from "./PortfolioItem";
import "./Projects.css";
import linkedinCloneThumbnail from "./images/linkedin-clone-screenshot.png";
import * as themeConf from "./Theme";
import styled from "styled-components";

function Projects() {
  const Projects = styled.div`
  width: 100%;
  background-color: ${themeConf.secondaryBackgroundColor};
  padding-top: 50px;
  padding-bottom: 100px;
  border-radius: 0px 0px 100px 100px;
  box-shadow: 0px 5px 5px #00000050;

  &:before{
  content: "";
  display: flex;
  position: relative;
  top: -200px;
  width: 100%;
  height: 150px;
  background-color: ${themeConf.backgroundColor};
  box-shadow: 0px 5px 5px #00000050;
  transform-origin: left;
  transform: skewY(4deg);
  z-index: 0;}
}
  `;

  return (
    <Projects>
      <h1 className="projects__title">Recent Projects</h1>
      <div className="projects__contain">
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          imageSrc=" "
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
    </Projects>
  );
}

export default Projects;
