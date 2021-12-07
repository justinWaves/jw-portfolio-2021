import "./PortfolioItem.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import * as themeConf from "./Theme";
import { useTheme } from "./ThemeManager";

interface PortfolioProps {
  title: string;
  body: string;
  codeUrl: string;
  imageSrc: string;
  tools: string[];
}

function PortfolioItem({
  title,
  body,
  codeUrl,
  imageSrc,
  tools,
}: PortfolioProps) {
  const theme = useTheme();

  const listItems = tools.map((tool: string) => <li>{tool}</li>);

  const PortfolioItem = styled.div`
    display: flex;
    height: 250px;
    width: 400px;
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
    box-shadow: 3px 3px 10px #00000050;
  `;

  return (
    <PortfolioItem>
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
          <GitHubIcon sx={{ fontSize: 40 }} /> View Source Code
        </a>
      </div>
    </PortfolioItem>
  );
}

export default PortfolioItem;
