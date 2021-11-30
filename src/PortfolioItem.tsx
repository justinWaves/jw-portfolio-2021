import React from "react";
import "./PortfolioItem.css";
import GitHubIcon from "@mui/icons-material/GitHub";

interface PortfolioProps {
  title: string
  body: string
  codeUrl: string
  imageSrc: string
  tools: string[]  
}

function PortfolioItem({ title, body, codeUrl, imageSrc, tools}: PortfolioProps) {

const listItems = tools.map((tool: string) => <li>{tool}</li>);

  return (
    <div className="portfolioItem">
      <h1 className="portfolioItem__title">{title}</h1>
      <img className="porfolioItem__image" src={imageSrc} alt="" />
      <p className="portfolioItem__body">{body}</p>
      <button></button>
      <ul>{listItems}</ul>
      <a className="portfolioItem__link" href={codeUrl}>
        <GitHubIcon /> Click to view Source Code
      </a>
    </div>
  );
}

export default PortfolioItem;
