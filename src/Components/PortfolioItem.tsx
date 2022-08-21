// import React, {useMemo} from "react"
import "./PortfolioItem.css";
import { useState } from "react";
import { PortfolioProps } from "../types";
import { animated } from "@react-spring/web";
import styled from "styled-components";
import * as themeConf from "../Theme";
import GithubLinks from "./GithubLinks";
import GitHubIcon from "@mui/icons-material/GitHub";
import useBoop from "../Hooks/use-boop";
import { config, useSpring } from "react-spring";

const ButtonWindowContainer = styled(animated.div)`
  background-color: ${themeConf.linkWindowBackgroundColor};
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
  const [isButtonMenuVisible, setIsButtonMenuVisible] = useState(false);
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  const handleClickEventForViewSiteButton = () => {
    setIsButtonMenuVisible(!isButtonMenuVisible);
    trigger();
  };

  const onPortfolioItemHover = () => {
    setIsCursorHovering(!isCursorHovering);
  };

  const linkWindowAnimation = useSpring({
    config: config.slow,
    from: {
      opacity: 0,
      transform: "translate3d(72%, 70%, 0)",
      borderRadius: "1500px 0px 0px 20px",
    },
    to: {
      opacity: isButtonMenuVisible ? 1 : 0,
      transform: isButtonMenuVisible
        ? "translate3d(0, 0, 0)"
        : "translate3d(72%, 70%, 0)",
      borderRadius: isButtonMenuVisible
        ? "20px 0px 0px 20px"
        : "1500px 0px 0px 20px",
    },
  });

  const buttonAnimation = useSpring({
    config: config.wobbly,
    delay: 100,
    from: {
      transform: "TranslateY(-400px)",
    },
    to: {
      opacity: isButtonMenuVisible ? 1 : 0,
      transform: isButtonMenuVisible ? "TranslateY(0px)" : "TranslateY(-400px)",
    },
  });

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
              isButtonMenuVisible
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
          buttonText={isButtonMenuVisible ? "Return" : "View Site"}
        />
        <ButtonWindowContainer
          style={linkWindowAnimation}
          className={
            isButtonMenuVisible
              ? "gh__linkWindow--show"
              : "gh__linkWindow--hidden"
          }
        >
          <animated.div
            style={buttonAnimation}
            className="gh__button--container"
          >
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <button className="gh__button--link">
                <GitHubIcon className="gh__icon" sx={{ fontSize: 40 }} />
                <p>View Site</p>
              </button>
            </a>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <button className="gh__button--link">
                <GitHubIcon className="gh__icon" sx={{ fontSize: 40 }} />
                <p>View Code</p>
              </button>
            </a>
          </animated.div>
        </ButtonWindowContainer>
      </PortfolioItemContain>
    </div>
  );
}

export default PortfolioItem;
