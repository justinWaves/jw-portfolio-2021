// import React, {useMemo} from "react"
import "./PortfolioItem.css";
import { useState } from "react";
import { PortfolioProps } from "../types";
import { animated } from "@react-spring/web";
import styled from "styled-components";
import * as themeConf from "../Theme";
import GithubLinks from "./GithubLinks";
import useBoop from "../Hooks/use-boop";

const ButtonWindowContainer = styled.div`
  background-color: ${themeConf.linkColor};
`;

const PortfolioItemContain = styled(animated.div)`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  will-change: transform;
`;

const ListItemTitle = styled.h4`
  color: ${themeConf.secondaryTextColor};
  margin-bottom: 5px;
`;

function PortfolioItem({
  title,
  body,
  codeUrl,
  linkUrl,
  imageSrc,
  tools,
}: PortfolioProps) {
  const listItems = tools.map((tool: string) => <li key={tool}>{tool}</li>);

  const [style, trigger] = useBoop({ rotation: 40 });
  const [buttonWindowStyle, setButtonWindowStyle] = useState(false);
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  const viewSiteButtonTextToggle = () => {
    if (buttonWindowStyle) {
      return "Return";
    } else {
      return "View Site";
    }
  };

  const handleClickEventForViewSiteButton = () => {
    setButtonWindowStyle(!buttonWindowStyle);
    trigger();
  };

  const onPortfolioItemHover = () => {
    setIsCursorHovering(!isCursorHovering);
  };

  return (
    <div className="portfolioItem__main">
      <PortfolioItemContain
        className="portfolioItem__container"
        onMouseEnter={onPortfolioItemHover}
        onMouseLeave={onPortfolioItemHover}
      >
        <div className="portfolio__content--left">
          <h1 className="portfolioItem__title">{title}</h1>
          <div className="portfolioItem__image-container">
            <div
              className={
                isCursorHovering
                  ? "portfolioItem__mobile-overlay"
                  : "portfolioItem__display-none"
              }
            >
              <div className="portfolioItem__mobile-overlay-text">{body}</div>
            </div>
            <img
              className={
                isCursorHovering
                  ? "portfolioItem__image-blurry"
                  : "portfolioItem__image"
              }
              src={imageSrc}
              alt=""
            />
          </div>
        </div>

        <div className="portfolioItem__content--center">
          <p className="portfolioItem__body">{body}</p>
        </div>

        <div className="portfolio__content--right">
          <div
            className={
              buttonWindowStyle
                ? "portfolio__tech-used--hidden"
                : "portfolio__tech-used"
            }
          >
            <ListItemTitle>Tech Used</ListItemTitle>
            <ul className="portfolio__listItems">{listItems}</ul>
          </div>
        </div>
        <GithubLinks
          onChildClick={handleClickEventForViewSiteButton}
          style={style}
          buttonText={viewSiteButtonTextToggle()}
        />
        <ButtonWindowContainer
          className={
            buttonWindowStyle
              ? "gh__linkWindow--show"
              : "gh__linkWindow--hidden"
          }
        >
          <div className="gh__button--container">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <button className="gh__button--link">View Site</button>
            </a>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <button className="gh__button--link">View Code</button>
            </a>
          </div>
        </ButtonWindowContainer>
      </PortfolioItemContain>
    </div>
  );
}

export default PortfolioItem;
