import PortfolioItem from "./PortfolioItem";
import "./Projects.css";
import linkedinClone from "./images/linkedin-alpha.png";
import ticTactToe from "./images/tictactoe-alpha.png";
import highLife from "./images/highlife-alpha.png";
import jwPort2018 from "./images/2018port-alpha.png";
import metaWaves from "./images/metawaves-alpha.png";
import jwPort2021 from "./images/jwportfolioSS-alpha.png";
import * as themeConf from "./Theme";
import styled from "styled-components";

const ProjectsContain = styled.div`
  background-color: ${themeConf.secondaryBackgroundColor};
  &:before {
    background-color: ${themeConf.backgroundColor};
  }
`;

function Projects() {
  return (
    <ProjectsContain className="projects">
      <h1 className="projects__title">Recent Projects</h1>
      <div className="projects__contain">
        <PortfolioItem
          title="MetaWaves Chat"
          body="Realtime Web3.0 Chat dApp that uses Metamask Wallet for user Auth, powered by a Moralis Backend"
          codeUrl="https://github.com/justinWaves/metaverse-challenge"
          linkUrl="https://metaverse-challenge-alpha-eight.vercel.app/"
          imageSrc={metaWaves}
          tools={["React", "Next.js", "Tailwind.css", "Moralis", "MetaMask"]}
        />
        <PortfolioItem
          title="JW Portfolio 2021"
          body="Portfolio App made with Typescript and React. Uses Styled-Themes/ Styled Components and React's Context API to handle light/dark mode."
          codeUrl="https://github.com/justinWaves/jw-portfolio-2021"
          linkUrl="https://justinwaves.github.io/jw-portfolio-2021/"
          imageSrc={jwPort2021}
          tools={["React", "Typescript", "Styled Components", "Material UI"]}
        />
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage user state, and a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only as of now"
          codeUrl=" "
          linkUrl="https://linkedin-clone-6520a.firebaseapp.com/"
          imageSrc={linkedinClone}
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        <PortfolioItem
          title="Tic React Toe"
          body="Create-React-App that uses Reacts useState hook to manage the players state. I  installed Sass so I could use an animated gradient for the winner text. "
          codeUrl="https://github.com/justinWaves/tic-react-toe"
          linkUrl="https://justinwaves.github.io/tic-react-toe/"
          imageSrc={ticTactToe}
          tools={["React", "Sass", "SVG"]}
        />
        <PortfolioItem
          title="HighLife Pages"
          body="Web Design firm I created focused on cannabis start-ups. During this time I created all my websites using bootstrap, HTML, Sass, vanilla Javascript, and managed client sites via an FTP server called Cyberduck."
          codeUrl="https://github.com/justinWaves/highlifePages"
          linkUrl="https://www.highlifepages.com/"
          imageSrc={highLife}
          tools={["Bootstrap", "HTML", "Sass", "Javascript"]}
        />
        <PortfolioItem
          title="JW Portfolio 2018"
          body="My First Portfolio site, you may see some similarities to this one. It slow, clunky but it works. I used CSS to size and animate differnet PNG of gears as a background. The site is fully responsive."
          codeUrl="https://github.com/justinWaves/JW-Portfolio"
          linkUrl="https://justinwaves.github.io/JW-Portfolio/"
          imageSrc={jwPort2018}
          tools={["Bootstrap", "HTML", "CSS", "Javascript"]}
        />
      </div>
    </ProjectsContain>
  );
}

export default Projects;
