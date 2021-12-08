import "./PortfolioItem.css";
import styled from "styled-components";
import * as themeConf from "./Theme";
import { useTheme } from "./ThemeManager";
import GithubLinks from "./GithubLinks";

interface PortfolioProps {
  title: string;
  body: string;
  codeUrl: string;
  linkUrl: string;
  imageSrc: string;
  tools: string[];
}

function PortfolioItem({
  title,
  body,
  codeUrl,
  linkUrl,
  imageSrc,
  tools,
}: PortfolioProps) {
  const theme = useTheme();

  const listItems = tools.map((tool: string) => <li>{tool}</li>);

  const PortfolioItem = styled.div`
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
  `;

  const ListItemTitle = styled.h4`
    color: ${themeConf.secondaryTextColor};
    margin-bottom: 5px;
    margin-left: 10px;
  `;

  return (
    <PortfolioItem className="portfolioItem__container">
      <div className="portfolio__content--left">
        <h1 className="portfolioItem__title">{title}</h1>
        <img className="porfolioItem__image" src={imageSrc} alt="" />
      </div>

      <div className="portfolioItem__content--center">
        <p className="portfolioItem__body">{body}</p>
      </div>

      <div className="portfolio__content--right">
        <div className="portfolio__listItems">
          <ListItemTitle>Tech Used</ListItemTitle>
          <ul>{listItems}</ul>
        </div>

        <GithubLinks codeUrl={codeUrl} linkUrl={linkUrl} />
      </div>
    </PortfolioItem>
  );
}

export default PortfolioItem;
