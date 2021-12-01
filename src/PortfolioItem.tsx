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
      <div className="portfolio__content--left">
      <h1 className="portfolioItem__title">{title}</h1>
      <button className="portfolioItem__button">
  <h1 className="button__plus">+</h1>
    
  </button>
      <img className="porfolioItem__image" src={imageSrc} alt="" />
      </div>

<div className="portfolioItem__content--center">
<p className="portfolioItem__body">{body}</p>
</div>

      <div className="portfolio__content--right">
      <ul>{listItems}</ul>
      <a className="portfolioItem__link" href={codeUrl}>
        <GitHubIcon sx={{ fontSize: 50 }}/> View Source Code
      </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
