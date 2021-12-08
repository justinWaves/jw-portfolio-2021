import PortfolioItem from "./PortfolioItem";
import "./Projects.css";
import linkedinClone from "./images/linkedin-alpha.png";
import ticTactToe from "./images/tictactoe-alpha.png";
import highLife from "./images/highlife-alpha.png";
import jwPort2018 from "./images/2018port-alpha.png";
import * as themeConf from "./Theme";
import styled from "styled-components";

function Projects() {
  const Projects = styled.div`
    background-color: ${themeConf.secondaryBackgroundColor};
    &:before {
      background-color: ${themeConf.backgroundColor};
    }
  `;

  return (
    <Projects className="projects">
      <h1 className="projects__title">Recent Projects</h1>
      <div className="projects__contain">
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          linkUrl=" "
          imageSrc={linkedinClone}
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="Tic React Toe"
          body="Create-React-App that uses Reacts useState hook to manage the players state. I  installed Sass so I could use an animated gradient for the winner text. "
          codeUrl=" "
          linkUrl=" "
          imageSrc={ticTactToe}
          tools={["React", "Sass", "SVG"]}
        />
        <PortfolioItem
          title="HighLife Pages"
          body="Web Design firm I created focused on cannabis start-ups. During this time I created all my websites using bootstrap, HTML, Sass, vanilla Javascript, and managed client sites via an FTP server called Cyberduck."
          codeUrl=" "
          linkUrl=" "
          imageSrc={highLife}
          tools={["Bootstrap", "HTML", "Sass", "Javascript"]}
        />
        <PortfolioItem
          title="JW Portfolio 2018"
          body="My First Portfolio site, you may see some similarities to this one. It slow, clunky but it works. I used CSS to size and animate differnet PNG of gears as a background. The site is fully responsive."
          codeUrl=" "
          linkUrl=" "
          imageSrc={jwPort2018}
          tools={["Bootstrap", "HTML", "CSS", "Javascript"]}
        />
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          linkUrl=" "
          imageSrc=" "
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          linkUrl=" "
          imageSrc=" "
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
      </div>
    </Projects>
  );
}

export default Projects;
