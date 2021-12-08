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
    justify-content: space-between;
    height: 250px;
    width: 400px;
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
    border-radius: 20px;
    margin: 10px;
    box-shadow: 3px 3px 10px #00000050;
    overflow: none;
    z-index: 1;

    &:hover {
      position: relative;
      top: -10px;
    }

    @media (max-width: 960px) {
      width: 90vw;
      height: 250px;

      &:hover {
        position: relative;
        top: 0px;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: auto;

      &:hover {
        position: relative;
        top: 0px;
      }
    }
  `;

  const GitHubLink = styled.a`
    margin-top: 15px;
    font-size: 12px;
    font-weight: 200;
    color: ${themeConf.linkColor};
    white-space: nowrap;
    z-index: 5;
  `;

  const ListItemTitle = styled.h4`
    color: ${themeConf.secondaryTextColor};
    margin-bottom: 5px;
    margin-left: 10px;
  `;

  return (
    <PortfolioItem>
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

        <GitHubLink href={codeUrl}>
          <GitHubIcon sx={{ fontSize: 40 }} /> View Source Code
        </GitHubLink>
      </div>
    </PortfolioItem>
  );
}

export default PortfolioItem;
