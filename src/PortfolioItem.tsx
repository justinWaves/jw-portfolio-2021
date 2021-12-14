import "./PortfolioItem.css";
import { useState } from "react";
import { animated } from "@react-spring/web";
import styled from "styled-components";
import * as themeConf from "./Theme";
import { useTheme } from "./ThemeManager";
import GithubLinks from "./GithubLinks";
import useBoop from "./Hooks/use-boop";

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

  const [style, trigger] = useBoop({ rotation: 360, scale: 1 });

  const [buttonWindowStyle, setButtonWindowStyle] = useState(false);

  const buttonTextToggle = () => {
    if (buttonWindowStyle) {
      return "Return";
    } else {
      return "View Site";
    }
  };

  const handleChildCLick = () => {
    trigger();
    setButtonWindowStyle(!buttonWindowStyle);
  };

  const ButtonWindowContainer = styled.div`
    background-color: ${themeConf.linkColor};
  `;

  const PortfolioItem = styled(animated.div)`
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
    will-change: transform;
  `;

  const ListItemTitle = styled.h4`
    color: ${themeConf.secondaryTextColor};
    margin-bottom: 5px;
    margin-left: 10px;
  `;

  return (
    <div className="portfolioItem__main">
      <PortfolioItem className="portfolioItem__container">
        <div className="portfolio__content--left">
          <h1 className="portfolioItem__title">{title}</h1>
          <img className="porfolioItem__image" src={imageSrc} alt="" />
        </div>

        <div className="portfolioItem__content--center">
          <p className="portfolioItem__body">{body}</p>
        </div>

        <div className="portfolio__content--right">
          <div
            className={
              buttonWindowStyle
                ? "portfolio__listItems--hidden"
                : "portfolio__listItems"
            }
          >
            <ListItemTitle>Tech Used</ListItemTitle>
            <ul>{listItems}</ul>
          </div>
        </div>
        <GithubLinks
          onChildClick={handleChildCLick}
          style={style}
          buttonText={buttonTextToggle()}
        />
        <ButtonWindowContainer
          className={
            buttonWindowStyle
              ? "gh__linkWindow--show"
              : "gh__linkWindow--hidden"
          }
        >
          <a href={linkUrl}>
            <button className="gh__button--link">View Site</button>
          </a>
          <a href={codeUrl}>
            <button className="gh__button--link">View Codebase</button>
          </a>
        </ButtonWindowContainer>
      </PortfolioItem>
    </div>
  );
}

export default PortfolioItem;
