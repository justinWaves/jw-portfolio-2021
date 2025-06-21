import PortfolioItem from "../Components/PortfolioItem";
import "./Projects.css";
import ProjectsHeader from "../Components/ProjectsHeader";
import linkedinClone from "../images/linkedin-alpha.png";
import sonataPiano from "../images/sonata-thumbnail.png"
import hearthAI from "../images/hearth-TN.png"
import highLife from "../images/highlife-alpha.png";
import tac from "../images/TAC-alpha.png";
import milanoTN from "../images/milano-thumbnail.png";
import ronboTN from "../images/ronbo-TN.png";
import metaWaves from "../images/metawaves-alpha.png";
import sonataCRM from "../images/sonata-crm-TN.png";
import minesurfer from "../images/minesurfer-TN.png";
import jwPort2021 from "../images/jwportfolioSS-alpha.png";
import pointmentTN from "../images/pointmentTN.png";
import jWavesBlog from "../images/jwavesblog-alpha.png";
import netflixTN from "../images/netflix-tn.png";
import es6 from "../images/es6-thumbnail.png";
import adTN from "../images/adTN.png";
import * as themeConf from "../Theme";
import styled from "styled-components";
import jwPort2018 from "../images/2018port-alpha.png";

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
               <PortfolioItem
          title="Sonata CRM"
          body="Built a comprehensive CRM and scheduling system for my piano tuning business. Features include client management, automated scheduling, payment processing, referral tracking, and detailed analytics dashboard. Handles the full business workflow from initial contact to payment collection."
          codeUrl="https://github.com/justinWaves/sonata-crm"
          linkUrl="https://sonata-crm-git-main-justinwaves-projects.vercel.app/"
          imageSrc={sonataCRM}
          tools={[
            "Next.js 15",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Express.js",
            "Tailwind CSS",
          ]}
        />
        <PortfolioItem
          title="Pointment"
          body="As a Full Stack Software Engineer at Stacks Du Beurre, I contributed to Pointment's core booking platform for nail salons. Led frontend optimizations and implemented real-time availability updates and automated client communication features. Built with modern React patterns and TypeScript for scalability and maintainability."
          codeUrl=""
          linkUrl="https://www.pointmentapp.com/"
          imageSrc={pointmentTN}
          tools={[
            "React",
            "TypeScript",
            "TypeGraphQL",
            "Prisma ORM",
            "AWS",
            "Tailwind CSS",
          ]}
        />
        <PortfolioItem
          title="Sonata Piano Works"
          body="Designed and developed a complete business website with integrated CRM and scheduling system for my piano tuning service. Features automated referral tracking, SEO optimization, and modern responsive design. Built with Next.js and Sanity CMS for easy content management."
          codeUrl=""
          linkUrl="https://www.sonatapianoworks.com/"
          imageSrc={sonataPiano}
          tools={["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"]}
        />
        <PortfolioItem
          title="Hearth AI Challenge"
          body="Completed a competitive take-home coding challenge for Hearth AI, building a contact management system with temperature scoring. Implemented smooth animations, responsive design, and optimized performance using Next.js App router and React Spring. Demonstrated advanced React patterns and modern development practices."
          codeUrl="https://github.com/justinWaves/hearth-fe-take-home"
          linkUrl="https://hearth-fe-take-home.vercel.app/"
          imageSrc={hearthAI}
          tools={["Next.js", "TypeScript", "React Spring", "Tailwind CSS"]}
        />
        <PortfolioItem
          title="Artisan Direct"
          body="Developed a headless e-commerce solution for Artisan Direct, integrating Shopify's backend with a custom Next.js frontend. Implemented advanced product filtering, real-time inventory updates, and optimized checkout flow. Built with performance and user experience in mind using modern web technologies."
          codeUrl=""
          linkUrl="https://www.artisandirect.shop/"
          imageSrc={adTN}
          tools={[
            "Next.js",
            "TypeScript",
            "Shopify API",
            "Sanity CMS",
            "Tailwind CSS",
          ]}
        />
        <PortfolioItem
          title="Ronbow Demo"
          body="Created an interactive design demo showcasing modern UI/UX principles and smooth animations. Built with React and Tailwind CSS, featuring responsive design, accessibility compliance, and optimized performance. Serves as a demonstration of frontend development skills and attention to design detail."
          codeUrl="https://github.com/justinWaves/ronbo-demo"
          linkUrl="https://ronbo-demo.vercel.app/"
          imageSrc={ronboTN}
          tools={["React", "Tailwind CSS", "Material UI"]}
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
          body="Developed a full-stack portfolio and e-commerce platform for artist Matt Milano, featuring dynamic content management, secure payment processing, and optimized image delivery. Implemented custom CMS workflows and built responsive galleries with modern web technologies. Handles content management and e-commerce functionality."
          codeUrl="https://github.com/justinWaves/milano-art"
          linkUrl="https://milano-art.vercel.app/"
          imageSrc={milanoTN}
          tools={["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"]}
        />
        <PortfolioItem
          title="MINESURFER 🏄‍♂️"
          body="Recreated the classic Minesweeper game with modern React patterns and TypeScript. Implemented a custom algorithm for mine generation and proximity calculations. Features responsive design, accessibility support, and smooth animations. Demonstrates strong algorithmic thinking and game development principles."
          codeUrl="https://github.com/justinWaves/ms-3"
          linkUrl="https://justinwaves.github.io/ms-3/"
          imageSrc={minesurfer}
          tools={["React", "TypeScript", "Tailwind CSS"]}
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
        {/* <PortfolioItem
          title="Tic React Toe"
          body="Tic Tac Toe game rendered in React."
          codeUrl="https://github.com/justinWaves/tic-react-toe"
          linkUrl="https://justinwaves.github.io/tic-react-toe/"
          imageSrc={ticTactToe}
          tools={["React", "Sass"]}
        /> */}
        <PortfolioItem
          title="Justin Waves Blog"
          body="Built a full-stack blog platform with advanced features including dynamic routing, server-side rendering, and real-time comments. Implemented custom RESTful APIs using Sanity's GROQ query language. Features include SEO optimization, incremental static regeneration, and form validation. Demonstrates modern full-stack development practices."
          codeUrl="https://github.com/justinWaves/justinwaves-blog"
          linkUrl="https://justinwaves-blog.vercel.app/"
          imageSrc={jWavesBlog}
          tools={["Next.js", "TypeScript", "Sanity CMS", "GROQ", "Tailwind CSS"]}
        />
        {/* <PortfolioItem
          title="MetaWaves Chat"
          body="Realtime Web3.0 Chat dApp that uses Metamask Wallet for user Auth, powered by a Moralis Backend."
          codeUrl="https://github.com/justinWaves/metaverse-challenge"
          linkUrl="https://metaverse-challenge-alpha-eight.vercel.app/"
          imageSrc={metaWaves}
          tools={["React", "Next.js", "Tailwind.css", "Moralis", "MetaMask"]}
        /> */}
        <PortfolioItem
          title="Syntax Highlighter"
          body="Developed an ES6 syntax highlighting application with custom parsing algorithms and real-time code formatting. Built with React and TypeScript, featuring support for modern JavaScript features and customizable themes. Demonstrates strong understanding of language parsing, AST manipulation, and developer tool development."
          codeUrl="https://github.com/justinWaves/es6-code-formatter"
          linkUrl="https://justinwaves.github.io/es6-code-formatter/"
          imageSrc={es6}
          tools={["React", "TypeScript"]}
        />
        <PortfolioItem
          title="JW Portfolio 2021"
          body="Designed and developed this portfolio website using TypeScript, React, and styled-components. Implemented a custom theme system with light/dark mode, smooth animations, and responsive design. Features include dynamic project showcasing, interactive components, and optimized performance. Demonstrates modern frontend development practices and attention to user experience."
          codeUrl="https://github.com/justinWaves/jw-portfolio-2021"
          linkUrl="https://justinwaves.github.io/jw-portfolio-2021/"
          imageSrc={jwPort2021}
          tools={["React", "TypeScript", "Styled Components", "Material UI"]}
        />
        {/* <PortfolioItem
          title="LinkedIn Clone"
          body="Built a LinkedIn clone with full authentication, real-time updates, and social networking features. Implemented Redux for state management, Firebase for backend services, and Material UI for consistent design. Features include user profiles, post creation, real-time notifications, and responsive design. Demonstrates full-stack development capabilities and understanding of social media platforms."
          codeUrl="https://github.com/justinWaves/linkedin-clone"
          linkUrl="https://linkedin-clone-6520a.firebaseapp.com/"
          imageSrc={linkedinClone}
          tools={["React", "Redux", "Firebase", "Material UI"]}
        /> */}
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
          body="My First Portfolio site, you may see some similarities to this one. I used CSS to size and animate different PNG of gears as a background."
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
