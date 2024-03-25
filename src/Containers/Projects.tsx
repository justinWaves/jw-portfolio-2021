import PortfolioItem from "../Components/PortfolioItem";
import "./Projects.css";
import ProjectsHeader from "../Components/ProjectsHeader";
import linkedinClone from "../images/linkedin-alpha.png";
import highLife from "../images/highlife-alpha.png";
import tac from "../images/TAC-alpha.png";
import milanoTN from "../images/milano-thumbnail.png";
import ronboTN from "../images/ronbo-TN.png";
import metaWaves from "../images/metawaves-alpha.png";
import ramboTN from "../images/ramboTN.png";
import jwPort2021 from "../images/jwportfolioSS-alpha.png";
import pointmentTN from "../images/pointmentTN.png";
import jWavesBlog from "../images/jwavesblog-alpha.png";
import netflixTN from "../images/netflix-tn.png";
import es6 from "../images/es6-thumbnail.png";
import adTN from "../images/adTN.png";
import * as themeConf from "../Theme";
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
      <ProjectsHeader />
      <div className="projects__contain">
        {/* <PortfolioItem
          title="Ronbow Demo"
          body=" Simple design demo made with React, Tailwind CSS 🎊"
          codeUrl="https://github.com/justinWaves/ronbo-demo"
          linkUrl="https://ronbo-demo.vercel.app/"
          imageSrc={ronboTN}
          tools={["React", "Tailwind CSS", "Material UI"]}
        /> */}
         <PortfolioItem
          title="Pointment"
          body="As a Frontend Software Engineer at Stacks Du Beurre in San Francisco, I have been a contributer for Pointment. A suite of high performaning react apps that help nail salons reach new clients and organize their booking flow."
          codeUrl=""
          linkUrl="https://www.pointmentapp.com/"
          imageSrc={pointmentTN}
          tools={["React", "Typescript", "Tailwind CSS", "Prisma", "AWS", "TypeGraphQL"]}
        />
           <PortfolioItem
          title="Artisan Direct"
          body="Headless Shopify Store front built with Next.JS React and Sanity"
          codeUrl=""
          linkUrl="https://www.artisandirect.shop/"
          imageSrc={adTN}
          tools={["React", "Next.JS", "Typescript", "Tailwind CSS", "Sanity", "Shopify"]}
        />
        {/* <PortfolioItem
          title="Rambo Party"
          body="Full-stack web app built for client with Next.JS, Sanity, TailwindCSS Typescript and React 🎊"
          codeUrl="https://github.com/justinWaves/rambo-site"
          linkUrl="https://rambo-site.vercel.app/"
          imageSrc={ramboTN}
          tools={["React", "Next.js", "Tailwind CSS", "Sanity", "Typescript"]}
        /> */}
        <PortfolioItem
          title="Matt Milano Art"
          body="Full-stack web app built with Next.JS, Sanity, TailwindCSS Typescript and React 🎊"
          codeUrl="https://github.com/justinWaves/milano-art"
          linkUrl="https://milano-art.vercel.app/"
          imageSrc={milanoTN}
          tools={["React", "Next.js", "Tailwind CSS", "Sanity", "Typescript"]}
        />

        {/* <PortfolioItem
          title="Netflix Clone"
          body="Full Stack Netflix clone built with working Stipe Checkout. Fetches movie data from TMDB. Built with a Firebase Backend (Firestore/ Google Auth), React, Redux, TailwindCSS, impemented in Typescript  🎊"
          codeUrl="https://github.com/justinWaves/netflix-build"
          linkUrl="https://netflix-clone-38dd5.firebaseapp.com/"
          imageSrc={netflixTN}
          tools={[
            "React",
            "Redux",
            "Stripe Checkout",
            "Firebase",

            "Typescript",
          ]}
        /> */}

        <PortfolioItem
          title="Justin Waves Blog"
          body="Full Stack web app built with React, Next.JS, TailwindCSS, and Sanity CMS for the backend. Utilizes Dynamic Routes, Server Side Rendering, Incremental Static Regeneration, a working comment section, and Form validation using React-Forms. Also utilized custom made RESTful API's using Sanity's query language GROQ to read and write data from the database."
          codeUrl="https://github.com/justinWaves/justinwaves-blog"
          linkUrl="https://justinwaves-blog.vercel.app/"
          imageSrc={jWavesBlog}
          tools={["React", "Next.js", "Tailwind CSS", "Sanity", "Typescript"]}
        />
        <PortfolioItem
          title="MetaWaves Chat"
          body="Realtime Web3.0 Chat dApp that uses Metamask Wallet for user Auth, powered by a Moralis Backend."
          codeUrl="https://github.com/justinWaves/metaverse-challenge"
          linkUrl="https://metaverse-challenge-alpha-eight.vercel.app/"
          imageSrc={metaWaves}
          tools={["React", "Next.js", "Tailwind.css", "Moralis", "MetaMask"]}
        />
        <PortfolioItem
          title="Syntax Highlighter"
          body="ES6 Syntax highlighter app rendered in React and implemented in Typescript."
          codeUrl="https://github.com/justinWaves/es6-code-formatter"
          linkUrl="https://justinwaves.github.io/es6-code-formatter/"
          imageSrc={es6}
          tools={["React", "Typescript"]}
        />
        <PortfolioItem
          title="JW Portfolio site"
          body="Portfolio App made with Typescript and React. Uses Styled-Themes/ Styled Components and React's Context API to handle light/dark mode."
          codeUrl="https://github.com/justinWaves/jw-portfolio-2021"
          linkUrl="https://justinwaves.github.io/jw-portfolio-2021/"
          imageSrc={jwPort2021}
          tools={["React", "Typescript", "Styled Components", "Material UI"]}
        />
        <PortfolioItem
          title="LinkedIn Clone"
          body="React app that uses Redux to manage global state of user, a Firebase backend for the database and email/password authentication. Icons by Material UI. Desktop only."
          codeUrl="https://github.com/justinWaves/linkedin-clone"
          linkUrl="https://linkedin-clone-6520a.firebaseapp.com/"
          imageSrc={linkedinClone}
          tools={["React", "Redux", "Firebase", "Material UI"]}
        />
        {/* <PortfolioItem
          title="Tic React Toe"
          body="Tic Tac Toe game rendered in React."
          codeUrl="https://github.com/justinWaves/tic-react-toe"
          linkUrl="https://justinwaves.github.io/tic-react-toe/"
          imageSrc={ticTactToe}
          tools={["React", "Sass"]}
        /> */}
        {/* <PortfolioItem
          title="HighLife Pages"
          body="Web Design firm I created focused on cannabis start-ups. During this time I created all my websites using bootstrap, HTML, Sass, vanilla Javascript, and managed client sites via an FTP server called Cyberduck."
          codeUrl="https://github.com/justinWaves/highlifePages"
          linkUrl="https://www.highlifepages.com/"
          imageSrc={highLife}
          tools={["Bootstrap", "HTML", "Sass", "Javascript"]}
        />
        <PortfolioItem
          title="Trinity Alpine"
          body="One of the sites I built for a Highlife Pages Client. It is fully responsive, made with Bootstrap4, JQuery, and plain ol HTML and CSS"
          codeUrl="https://github.com/justinWaves/trinity-alpine"
          linkUrl="https://justinwaves.github.io/trinity-alpine/"
          imageSrc={tac}
          tools={["Bootstrap", "JQuery", "HTML", "CSS"]}
        /> */}
        {/* <PortfolioItem
          title="JW Portfolio 2018"
          body="My First Portfolio site, you may see some similarities to this one. I used CSS to size and animate different PNG of gears as a background. The site is fully responsive."
          codeUrl="https://github.com/justinWaves/JW-Portfolio"
          linkUrl="https://justinwaves.github.io/JW-Portfolio/"
          imageSrc={jwPort2018}
          tools={["Bootstrap", "HTML", "CSS", "Javascript"]}
        /> */}
      </div>
    </ProjectsContain>
  );
}

export default Projects;
